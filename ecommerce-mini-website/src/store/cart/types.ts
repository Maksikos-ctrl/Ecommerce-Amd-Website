import {IGood} from '../../types';

export enum actionTypes {
    CART_ADD_ITEM = 'CART_ADD_ITEM',
    CART_REMOVE_ITEM = 'CART_REMOVE_ITEM',
    CART_QUANTITY_ITEM = 'CART_QUANTITY_ITEM'
}

interface ICartAddingItemPayload {
    good: IGood,
    count: number
}

interface ICartAddingItem {
    type: actionTypes.CART_ADD_ITEM,
    payload: ICartAddingItemPayload
}

interface ICartRemovingItem {
    type: actionTypes.CART_REMOVE_ITEM,
    payload: string
}

export type TypeActionCart = ICartAddingItem | ICartRemovingItem;