import faker from "faker";
console.log("products");

const mount = (el) => {
    let products = '';

    for (let i = 0; i < 5; i++) {
        const name = faker.commerce.productName(0);
        products += `<div>${name}</div>`;
    }

    el.innerHTML = products;
}

if (process.env.NODE_ENV === "development") {
   const el = document.querySelector("#products");
   if (el) {
    mount(el);
   };
}

export { mount };