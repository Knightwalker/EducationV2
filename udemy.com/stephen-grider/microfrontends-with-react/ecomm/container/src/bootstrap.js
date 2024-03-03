import { mount as m1 } from "products/ProductsIndex";
import { mount as m2 } from "cart/CartComponent";

console.log("container");

const containerProductsEl = document.querySelector("#container-products");
const containerCartEl = document.querySelector("#container-cart");
m1(containerProductsEl);
m2(containerCartEl);
