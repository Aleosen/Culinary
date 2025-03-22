import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import './DropDownMenu.css'
  
export default function DropDownMenu({buttonContent, items}) {
    const [MenuOpen, setMenuOpen] = useState(false)
    const MenuRef = useRef(null)
    useEffect(()=>{
        const handleClickOutside = (event)=>{
            if(MenuRef.current && !MenuRef.current.contains(event.target)){
              setMenuOpen(false)
            }
        }
        document.addEventListener('click', handleClickOutside)
        return ()=>{
          document.removeEventListener('click', handleClickOutside)
        }
  }, [])
  return (
    <div className="relative"  ref={MenuRef}>
        <button onClick={()=>{setMenuOpen(!MenuOpen)}} className={` text-gray-600 hover:text-orange-600 cursor-pointer`}>
            {buttonContent}
        </button>
        <div className={`dropdown-menu shadow-lg ${MenuOpen ? ' open' : ''}`}>
            { items.map((item, index) => (
                <Link onClick={()=>setMenuOpen(false)} key={index} to={item.path} className="text-gray-600 hover:text-orange-600 px-8 py-4">
                    {item.content}
                </Link>
            ))}
        </div>
    </div>
  )
}
