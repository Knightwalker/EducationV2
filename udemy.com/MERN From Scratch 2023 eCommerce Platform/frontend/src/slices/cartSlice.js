import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : {
    cartItems: []
};

const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
}

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const existItem = state.cartItems.find((x) => x._id === item._id);
            if (existItem) {
                // Wtf is he doing here? He does not explain
                state.cartItems = state.cartItems.map((x) => x._id === existItem._id ? item : x);
            } else {
                state.cartItems.push(item);
            }

            // Calculate items price
            state.itemsPrice = addDecimals(state.cartItems.reduce((acc, item) => {
                return acc + item.price * item.qty;
            }, 0));

            // Calculate shipping price (If order is over $100 then free, else 10$ shipping)
            state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10);
            
            // Calculate tax price (15% tax)
            state.taxPrice = addDecimals(Number((0.15 * state.itemsPrice).toFixed(2)));

            // Calculate total price
            state.totalPrice = (
                Number(state.itemsPrice) +
                Number(state.shippingPrice) +
                Number(state.taxPrice)
            ).toFixed(2);

            localStorage.setItem("cart", JSON.stringify(state));
        }
    }
});

const { addToCart } = cartSlice.actions;

export default cartSlice;
export {
    addToCart
}