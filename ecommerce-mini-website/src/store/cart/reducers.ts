import { ICartItem } from "../../types";
import { actionTypes, TypeActionCart } from "./types";

const initState: ICartItem[] = []; // this is our basket in which we will be adding our cards, it will be like array

export const cartReducer = (state = initState, action: TypeActionCart) => {
    switch (action.type) {
      case actionTypes.CART_ADD_ITEM:
        {
            const cart = [...state],
                {count, good} = action.payload,
                foundGood = cart.find(i => i._id === good._id);

        }
        return { value: state + 1 }
      case actionTypes.CART_REMOVE_ITEM:
        return { value: state - 1 }
      default:
        return state
    }
} 

