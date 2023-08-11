class MenuPage extends HTMLElement {
    constructor() {
        super();
        this.shadowRootRef = this.attachShadow({ mode: "closed" });

        // Add template
        const template = document.getElementById("menu-page-template");
        const content = template.content.cloneNode(true);
        this.shadowRootRef.appendChild(content);
    
        // Add css
        const linkElem = document.createElement("link");
        linkElem.setAttribute("rel", "stylesheet");
        linkElem.setAttribute("href", "./components/MenuPage.css");
        this.shadowRootRef.appendChild(linkElem);
    }

    // connectedCallback() {
    //     const template = document.getElementById("menu-page-template");
    //     const content = template.content.cloneNode(true);
    //     this.shadowRootRef.appendChild(content);
    // }
}

customElements.define("menu-page", MenuPage);

export default MenuPage;