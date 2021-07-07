import { createSelector } from "reselect";

const selectCart = state => state.cart;


export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden 
) 

export const selectCartItemesCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce(
        (accumulatedQunaity, cartItem) =>
        accumulatedQunaity + cartItem.quantity,
        0
    )
);