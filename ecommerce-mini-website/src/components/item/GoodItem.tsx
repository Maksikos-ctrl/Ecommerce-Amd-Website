import React, {FC, useState} from 'react';

import { useDispatch } from 'react-redux';

import {addToCart} from '../../store/cart/actions';
import QuanityOfGoods from '../generalQuantity/QuantityOfGoods';

import {IGood} from '../../types';

interface IGoodItem {
    good: IGood
   
}

const GoodItem: FC<IGoodItem> = ({good}) => {

   const [count, setCount] = useState(0),
        dispatch = useDispatch(),
        addingHandler = () => {
           dispatch(addToCart(good, count));
           // console.log(good._id);
    };


    return (
        <div className="p-7 w-4/5 mx-auto mt-7 flex justify-center flex-col text-center items-center "
        style={{
            borderRadius: 50,
            background: 'linear-gradient(145deg, #cacaca, #f0f0f0)',
            boxShadow: '20px 20px 60px #bebebe, -20px -20px #9f9797' 
        }}>
            <img src={good.imagePath} className="w-7/12 rounded-2xl" alt={good.name}/>
            <div className="text-lg font-bold my-2" key={good._id}>{good.name}</div>
            <div className="text-sm font-bold text-gray-600">${good.price}</div>
            <QuanityOfGoods count={count} setCount={setCount}/>
            <button className="bg-green-500 font-semibold text-white rounded-sm px-3 py-1 hover:tracking-wider" onClick={addingHandler}>Basket add</button>
        </div>
    )
}


export default GoodItem 