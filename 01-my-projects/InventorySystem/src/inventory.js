const debugMode = true;

class Inventory {
    constructor() {
        this.inventoryDict = {};
        this.inventorySize = 10;
        this.inventoryEl = document.getElementById("inventory");
        this.draggedItemEl = null;
    }

    /**
     * This function applies a CSS trick, which helps fix a bug where when you drag an item over another item, events are being fired, which bubble from the item child to the slot, but while dragging, we would like for the items to NOT fire any events. This block will be added for all items except the currently dragged item.
     * @param {string} rule either `block` or `unblock` 
     */
    _blockItemsPointerEvents(rule) {
        const itemEls = this.inventoryEl.querySelectorAll(".item");
        
        if (rule === "block") {
            for (const itemEl of itemEls) {
                // The equals operator is checking if those elements point to the same object in memory.
                if (this.draggedItemEl === itemEl) {
                    continue;
                }
                itemEl.classList.add("pointer-events-none");
            }
        } else if (rule === "unblock") {
            for (const itemEl of itemEls) {
                // If the "drop" event fires, the "draggedItemEl" will be "null", so we can just remove this class in all items, because with "classList.remove()" if the string is not in the list, no error is thrown, and nothing happens.
                //@see https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/remove
                itemEl.classList.remove("pointer-events-none");
            }
        }
    }

    handleDragStart(event) {
        // We use "event.target" to reference the item element, since the event only fires on a draggable item and the target will always be the item element.
        const itemEl = event.target;
        itemEl.classList.add("dragging");

        // store a ref. on the dragged element
        this.draggedItemEl = itemEl;

        // This trick adds class "hidden" to the "classList" of the initial element, but not the element who is currently being dragged, despite that they reference to the same element.    
        window.requestAnimationFrame(() => {
            itemEl.classList.add("hidden");
        });

        // Visual: apply effects
        this._blockItemsPointerEvents("block");

        // DTO
        const payload = JSON.stringify({
            draggedItemId: itemEl.dataset.itemId
        });
        event.dataTransfer.setData("application/json", payload);
        event.dataTransfer.effectAllowed = "move";

        if (debugMode) {
            console.log("Event: dragstart");
        }
    }

    handleDragEnd(event) {
        // We use "event.target" to reference the item element, since the event only fires on a draggable item and the target will always be the item element.
        const itemEl = event.target;
        itemEl.classList.remove("dragging");
        itemEl.classList.remove("hidden");

        // Visual: clear effects
        this._blockItemsPointerEvents("unblock");

        // If a drop failed, clear the ref. on the dragged element.
        if (this.draggedItemEl !== null) {
            this.draggedItemEl = null;
        }

        if (debugMode) {
            console.log("Event: dragend");
        }
    }

    handleDragOver(event) {
        // Guard (whitelist method): Allows this function to work only with dragged element, referenced in "draggedItemEl". This prevents the function to work with other elements or text selections, which still fire the "dragover" event.
        if (this.draggedItemEl === null) {
            return;
        }

        // preventDefault() allows the slot elements to recieve "drop" events.
        event.preventDefault();

        // Temporary comment: the event fires too many times and generates too many console logs. 
        // if (debugMode) {
        //     console.log("Event: dragover");
        // }
    }

    handleDragEnter(event) {
        // Guard (whitelist method): Allows this function to work only with dragged element, referenced in "draggedItemEl". This prevents the function to work with other elements or text selections, which still fire the "dragover" event.
        if (this.draggedItemEl === null) {
            return;
        }

        // highlight potential drop target when the draggable element enters it.
        event.currentTarget.classList.add("hovered");

        if (debugMode) {
            console.log("Event: dragenter");
        }
    }

    handleDragLeave(event) {
        // Guard (whitelist method): Allows this function to work only with dragged element, referenced in  "draggedItemEl". This prevents the function to work with other elements or text selections, which still fire the "dragover" event.
        if (this.draggedItemEl === null) {
            return;
        }

        // reset background of potential drop target when the draggable element leaves it.
        event.currentTarget.classList.remove("hovered");

        if (debugMode) {
            console.log("Event: dragleave");
        }
    }

    handleDrop(event) {
        // Guard (whitelist method): Allows this function to work only with dragged element, referenced in "draggedItemEl". This prevents the function to work with other elements or text selections, which still fire the "drop" event.
        if (this.draggedItemEl === null) {
            return;
        }

        // DTO
        const data = JSON.parse(event.dataTransfer.getData("application/json"));
        const { draggedItemId } = data;

        // If the current slot is empty, place the item. Otherwise swap the items position.
        const currSlotEl = event.currentTarget;
        const currSlotId = currSlotEl.dataset.slotId;
        if (currSlotEl.children.length <= 0) {
            // Inventory update: update item position.
            this.inventoryDict[draggedItemId]["slotId"] = currSlotId;

            // Visual: move dragged element inside drop target.
            currSlotEl.appendChild(this.draggedItemEl);
        } else {
            const currItemEl = currSlotEl.children[0];
            const prevSlotEl = this.draggedItemEl.parentElement;
            const currItemId = currItemEl.dataset.itemId;
            const prevSlotId = prevSlotEl.dataset.slotId;

            // Inventory update: swap dragged element with current element
            this.inventoryDict[draggedItemId]["slotId"] = currSlotId;
            this.inventoryDict[currItemId]["slotId"] = prevSlotId;

            // Visual: swap dragged element with current element.
            prevSlotEl.appendChild(currItemEl);
            currSlotEl.appendChild(this.draggedItemEl);
        }

        // reset background of drop target when the draggable element is dropped.
        currSlotEl.classList.remove("hovered");

        // clear the ref. on the dragged element
        this.draggedItemEl = null;

        if (debugMode) {
            console.log("Event: drop");
        }
    }

    init() {
        // Seed data
        this.inventoryDict["0"] = { itemId: "0", name: "sandwich", slotId: "3" };
        this.inventoryDict["1"] = { itemId: "1", name: "water bottle", slotId: "0" };

        // Generate inventory slots
        for (let i = 0; i < this.inventorySize; i++) {
            const slotEl = document.createElement("div");
            slotEl.classList.add("slot");
            slotEl.setAttribute("data-slot-id", i);

            // Events fired on the slots (drop targets)
            slotEl.addEventListener("dragover", this.handleDragOver.bind(this));
            slotEl.addEventListener("dragenter", this.handleDragEnter.bind(this));
            slotEl.addEventListener("dragleave", this.handleDragLeave.bind(this));
            slotEl.addEventListener("drop", this.handleDrop.bind(this));

            this.inventoryEl.appendChild(slotEl);
        }

        // Generate items in slots
        for (const itemId in this.inventoryDict) {
            const item = this.inventoryDict[itemId];
            const { slotId } = item;

            const itemEl = document.createElement("div");
            itemEl.classList.add("item");
            itemEl.setAttribute("draggable", true);
            itemEl.setAttribute("data-item-id", itemId);
            itemEl.textContent = itemId;

            // Events fired on the items (draggable elements)
            itemEl.addEventListener("dragstart", this.handleDragStart.bind(this));
            itemEl.addEventListener("dragend", this.handleDragEnd.bind(this));

            const slotEl = document.querySelector(`[data-slot-id="${slotId}"]`);
            slotEl.appendChild(itemEl);
        }
    };

}

const inventory = new Inventory();
inventory.init();