import {useState, FC} from 'react';


import GoodItem from '../item/GoodItem';

import {IGood} from '../../types';



const Goods = ({goods}: {goods: IGood[]}) => {
//    const [searchGood, setSearchGood] = useState('');  
    const filteredItms = goods.map(i => <GoodItem good={i} key={i._id}/>)
   
//   return (
//     <div className="mt-4">

        
                
//         {goods.filter(val => searchGood === "" ? val : val.name.toLowerCase().includes(searchGood.toLowerCase()) ? val : 'U have not written name correctly').map(i => (
//            <GoodItem good={i} key={i._id}/>
//         ))}

//     </div>
//   )

  return (
    <div className="mt-4">

        {filteredItms}
                
        

    </div>
  )
}

export default Goods
