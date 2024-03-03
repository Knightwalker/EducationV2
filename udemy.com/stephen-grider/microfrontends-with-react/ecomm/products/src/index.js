import faker from "faker";
console.log("products");

let products = '';

for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName(0);
    products += `<div>${name}</div>`;
}

document.querySelector("#dev-products").innerHTML = products;