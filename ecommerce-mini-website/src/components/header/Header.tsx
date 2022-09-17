import { FC, useState } from 'react';
import cn from 'classnames';




import logoImage from '../../assets/imgs/amd.svg';
import cartImage from '../../assets/imgs/bx-cart.svg';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../store/cart/actions';
import SearchFilter from '../searchFilter/SearchFilter';


// const cartItems: ICartItem[] = [
//     {
//        _id: 'hhsdsahd',
//        imagePath: 'https://cdn.alza.sk/ImgW.ashx?fd=f16&cd=NT379u80o3',
//        name: 'Lenovo Legion 5 Pro 16ACH6H', 
//        count: 1,
//        price: 1500,
//     }
// ];


const Header: FC = () => {
 
  const [isShownCart, setShownCart] = useState(false),
    cart = useTypedSelector(state => state.cart),
    total = cart.reduce((ac, i) => ac + i.price , 0),
    dispatch = useDispatch(),
    removeHandler = (id: string) => {
        dispatch(removeFromCart(id))
    };
    
    


   
      

  return (
    <div className="flex items-center justify-between relative w-full py-1.5 px-3" style={{
        backgroundColor: '#aa051b',
        background: 'linear-gradient(90deg, rgba(255,0,104,1) 0%, #2b879e 100%)',
        boxShadow: '1px 3px 30px 0px rgba(50, 50, 50, 0.75)'
    }}>
        <img src={logoImage} alt="" width="120"/>

        <SearchFilter/>
       
        

        <button className="bg-transparent border-none relative" onClick={() => setShownCart(!isShownCart)}>
            <img src={cartImage} alt="" width="60" />
            <div className="text-orange-600 absolute bottom-0 right-1 font-bold p-2 rounded-full bg-white w-5 h-3 flex items-center content-center text-center">
                {cart.length}
            </div>
        </button>

        <div className={cn('bg-white absolute right-0 shadow-md p-5 rounded-md z-10', {
            hidden: !isShownCart
        })} style={{
            top: '60px'
        }}
        >
            {cart.map(i => (
                <div className="flex items-center mb-4" key={`cart item${i.name}`}>
                <img src={i.imagePath} alt={i.name} width="55" height="55" className="mr-3"/>
                <div className="">
                    <div>{i.name}</div>
                    <div>{`${i.count === 0 ? 1 : i.count} x ${i.price.toLocaleString() + '$'}`}</div>
                    <button className='text-red-600 bg-transparent border-0' onClick={() => removeHandler(i._id)}>Remove</button>
                </div> 
                </div>
            ))}

                        
            <div className="text-lg border-solid border-t-2 border-red-100 pt-1 mt-5">
                Total: <b>${total.toLocaleString()}</b>
            </div>
           
        </div>
    </div>
  )
}  

export default Header;
