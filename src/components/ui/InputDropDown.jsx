import React from 'react'
import { useState } from 'react'
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";
export default function InputDropDown({buttonContent, items, checks, onChangeCheckBoxes}) {
  const [MenuOpen, setMenuOpen] = useState(false)
 
  return (
    <div className="relative">
      <div className="flex items-center">
        <button onClick={()=>{setMenuOpen(!MenuOpen)}} className={` flex items-center text-gray-600 hover:text-orange-600 cursor-pointer mr-2`}>
            <span className=' mr-2'>{buttonContent}</span>
            {MenuOpen ? <SlArrowUp /> : <SlArrowDown />}
        </button>
        </div>
        <div className={`mobile-dropdown-menu my-2 ${MenuOpen ? ' open' : ''}`}>
            { items.map((item, index) => (
              <div className="" key={index} >
                <input 
                id={item.slug} 
                type='checkbox' 
                className="text-gray-600 hover:text-orange-600" 
                checked={checks[index]} 
                onChange={()=>onChangeCheckBoxes(index)}/>

                <label className='ml-2' htmlFor={item.slug}>{item.name}</label>
              </div>
            ))}
        </div>
    </div>
  )
}
