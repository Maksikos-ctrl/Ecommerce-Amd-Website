import React, {FC} from 'react';
import { TypeSetState } from '../../types';

interface IQuantity {
    count: number,
    setCount: TypeSetState<number>
}

// declare module 'react' {
//     interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
//       // extends React's HTMLAttributes
//       maxLength?: number;
//     }
// }

const QuanityOfGoods: FC<IQuantity> = ({count, setCount}) => {
    return (
        <div className="flex items-center my-2">
            <button onClick={() => count > 0 && setCount(count - 1)}>-</button>
            <input type="text" maxLength={2} className="mx-2" onChange={e => setCount(+e.target.value.replace(/[^0-9]/, ''))} value={count}/>
            <button onClick={() => count <= 98 && setCount(count + 1)}>+</button>
        </div>
    )
}

export default QuanityOfGoods;