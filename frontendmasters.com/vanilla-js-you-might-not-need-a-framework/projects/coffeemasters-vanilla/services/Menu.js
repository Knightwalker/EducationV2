import API from "./API.js";

const loadData = async () => {
    const data = await API.fetchMenu();
    app.store.menu = data;
}

export {
    loadData
}