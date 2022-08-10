export interface IGood {
    _id: string;
    name: string;
    imagePath: string;
    price: number;
}

export interface ICartItem extends IGood  {
    count: number;
}