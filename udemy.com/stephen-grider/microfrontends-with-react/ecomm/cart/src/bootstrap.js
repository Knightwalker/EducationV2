import faker from "faker";
console.log("cart");

const mount = (el) => {
    const cartText = `<div>You have ${faker.random.number()} items in your cart.</div>`;
    el.innerHTML = cartText;
}

if (process.env.NODE_ENV === "development") {
    const el = document.querySelector("#cart");
    if (el) {
        mount(el);
    }
}

export { mount };

