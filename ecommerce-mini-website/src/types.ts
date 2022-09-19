import { Dispatch,  SetStateAction } from 'react';

export interface IGood {
    _id: string;
    name: string;
    imagePath: string;
    price: number;
    children?: JSX.Element|JSX.Element[];
}

export interface ICartItem extends IGood  {
    count: number;
}

export type TypeSetState<T> = Dispatch<SetStateAction<T>>