const Router = {
    init: () => {
        document.querySelectorAll("a.navlink").forEach(a => {
            a.addEventListener("click", e => {
                e.preventDefault();
                const url = e.target.getAttribute("href");
                Router.go(url);
            });
        });
        // Event handler for URL changes
        window.addEventListener("popstate", (e) => {
            Router.go(e.state.route, false)
        });

        // Check initial URL
        Router.go(location.pathname);
    },
    go: (route, addToHistory = true) => {
        console.log(`Going to ${route}`);

        if (addToHistory) {
            history.pushState({ route }, "", route);
        }
        let pageElement = null;
        switch (route) {
            case "/":
                pageElement = document.createElement("menu-page");
                break;
            case "/order":
                pageElement = document.createElement("order-page");
                break;
            default:
                if (route.startsWith("/product-")) {
                    pageElement = document.createElement("details-page");
                    pageElement.textContent = "Details";
                    const paramId = route.substring(route.lastIndexOf("-") + 1 );
                    pageElement.dataset.id = paramId;
                }
                break;
        }
        if (pageElement) {
            // document.querySelector("main").children[0].remove();
            const mainEl = document.querySelector("main");
            mainEl.innerHTML = "";
            mainEl.appendChild(pageElement);
            window.scrollX = 0;
            window.scrollY = 0;
        }
    }
}

export default Router;