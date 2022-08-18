import { IGood } from "../../types";
import { actionTypes } from "./types";

export const addToCart = (good: IGood, count: number) => ({
    type: actionTypes.CART_ADD_ITEM,
    payload: {good, count}
});


export const removeFromCart = (goodId: string) => ({
    type: actionTypes.CART_ADD_ITEM,
    payload: goodId
});

export const changeQuantityHandler = (type: 'plus' | 'minus', good: IGood) => ({});