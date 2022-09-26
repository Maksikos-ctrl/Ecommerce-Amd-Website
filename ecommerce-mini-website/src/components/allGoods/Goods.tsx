import {useState, FC} from 'react';


import GoodItem from '../item/GoodItem';

import {IGood} from '../../types';
import goods from '../../data/goods';


const Goods = ({query}: {query: string}) => {

  console.log('heelodsdas', query);


  


  // const [searchField, setSearchField] = useState<IGood[]>([]);
  //     // filteredItms = goods.filter(good => good.name.toLowerCase().includes(searchField.toLowerCase())).map(i => <GoodItem good={i} key={i._id}/>);
  //  setSearchField(goods.filter(good => good.name.toLowerCase().includes(searchField.toLowerCase())))
   
  return (
    <div className="mt-4">

        
      {goods.filter(good => good.name.toLowerCase().includes(query.toLowerCase())).map(i => <GoodItem good={i} key={i._id}/>)}          
      

    </div>
  )

 
}

export default Goods
