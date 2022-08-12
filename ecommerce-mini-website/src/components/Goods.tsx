import React from 'react';


import GoodItem from './GoodItem';

import {IGood} from '../types';

const goods: IGood[] = [
    {
        _id: 'uyydyasudhw',
        imagePath: 'https://cdn.alza.sk/ImgW.ashx?fd=FotoAdd&cd=NC108c7i04u2-02',
        name: 'Acer Nitro 5 Obsidian Black',
        price: 665
    },
    {
        _id: 'hffg',
        imagePath: 'https://cdn.alza.sk/ImgW.ashx?fd=f16&cd=NB068j7r6a',
        name: 'MSI Katana GF66 11UG-467CZ ',
        price: 1459
    },
    {
        _id: 'llpokjk',
        imagePath: 'https://cdn.alza.sk/ImgW.ashx?fd=f16&cd=NB200F2n8p0i',
        name: 'MSI GF63 Thin 11SC-407CZ ',
        price: 687
    },
    {
        _id: 'wyuuewqenw',
        imagePath: 'https://cdn.alza.sk/ImgW.ashx?fd=f16&cd=NB068j7h2',
        name: 'MSI Katana GF66 11SC-685CZ',
        price: 645
    },
];

const Goods = () => {

   
  return (
    <div className="mt-4">
        
       {goods.map(g => (
           <GoodItem good={g} key={g._id}/>
       ))}

    </div>
  )
}

export default Goods
