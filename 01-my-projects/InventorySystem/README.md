# Inventory System
## :pencil: Summary 
Basic slot-based inventory system, designed for equally-sized item design. Each item, regardless of size, takes up one slot within the inventory. The number of items a player can carry is limited by the number of available slots.

There are several types of inventory systems in games:
- **slot-based inventory system**, where each item occupies a specific slot within the inventory.
    - good for equally-sized item design. Where each item fits into 1 inventory slot.
- **grid-based inventory system**, where items occupy a defined area on a grid, and each item may have a different shape or size. The challenge is to arrange items efficiently within the available grid space.
    - good for skeuomorphic item design. Where each item has different size and may take from 1 to several inventory slots.
- **weight-based inventory system**, where each item has a weight value, and the player's carrying capacity is limited by the total weight they can bear.
    - good if you want to add a layer of realism, as heavier items consume more capacity.
- **container-based inventory system**, where items are stored in containers (e.g., backpacks, chests). Each container has its own capacity and may contain various items.

There are inventory features, which can be added in any of those system.
- **item stacking:** Some items, can be stacked and have a stack count associated with them. For example multiple units of the same item can occupy a single inventory slot. There is often a limit to the maximum stack size for a particular item type.

## :gear: Technology Stack
### Web APIs
- [HTML Drag and Drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)