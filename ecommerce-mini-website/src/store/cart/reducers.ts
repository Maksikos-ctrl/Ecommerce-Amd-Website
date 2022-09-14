import { ICartItem } from "../../types";
import { actionTypes, TypeActionCart } from "./types";

const initState: ICartItem[] = []; // this is our basket in which we will be adding our cards, it will be like array

export const cartReducer = (state = initState, action: TypeActionCart) => {
    switch (action.type) {
      case actionTypes.CART_ADD_ITEM:
      {
        const cart = [...state],
            {count, good} = action.payload, // from action.payload we're getting count - quanitity of goods which have to be added in a basket and good
            foundGood = cart.find(i => i._id === good._id);

       

        foundGood ? foundGood.count = count : cart.push({...good, count}) // if we have found our good, we're changing its count, unless, we're pushing in a basket
          
        if (foundGood === undefined) {
          console.log('fuck');
        } 
        
        return cart
      }
       
      case actionTypes.CART_REMOVE_ITEM:
      {
        // const cart = [...state];

        // cart.forEach((i, index) => {

        //   console.log(i._id === action.payload);
        //   if (i._id === action.payload) {
        //     cart.slice(index, 1) // мы обрезаем этот элемент, но без изминение prev массива
        //   }  
        // });

        return state.filter(i => i._id !== action.payload);
          
      }
      

     
      default:
        //TODO  Редьюсеры всегда должны возмращать новое состояние, даже если оно не изменилось
        return state

        
    }
} 

