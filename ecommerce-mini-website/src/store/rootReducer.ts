import { combineReducers } from "@reduxjs/toolkit";

import {cartReducer} from './cart/reducers';

const rootReducer = combineReducers({
    cart: cartReducer,

});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;