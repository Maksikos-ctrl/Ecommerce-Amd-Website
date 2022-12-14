import { FC, useState } from 'react';
import Goods from '../allGoods/Goods';
import {IGood} from '../../types';

// interface SearchFilterProps {
//     children: React.ReactNode;
// }

interface ISearchFilter {
    handleChange: React.Dispatch<React.SetStateAction<string>>;
    query: string;
}

const SearchFilter = ({query, handleChange}: ISearchFilter, e: React.MouseEvent<HTMLLIElement>) => {
 
    // const [searchField, setSearchField] = useState(''),
    //     [searchShow, setSearchShow] = useState(false),
        // filteredItms = goods.filter(good => good.name.includes(searchField.toLowerCase())),
    const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
            console.log(e.target.value);
            handleChange(e.target.value)
            // setSearchShow(!!e.target.value);
            // Shitcode
            // e.target.value === "" ? setSearchShow(false) : setSearchShow(true); 
        };
        
        
    



    return (
        <form className="max-w-sm px-2">
            <div className="relative">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
                <input
                    type="text"
                    
                    placeholder="Search"
                    className="w-full py-3 pl-12 pr-10 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600 font-extrabold"
                    onChange={handleChanges}
                    
                />
               
            </div>
          
       </form>

       
    )
}




export default SearchFilter;