import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import './DropDownMenu.css'
  
export default function DropDownMenu({buttonContent, items}) {
    const [MenuOpen, setMenuOpen] = useState(false)
    const aboutMenuRef = useRef(null)
    useEffect(()=>{
        const handleClickOutside = (event)=>{
            if(aboutMenuRef.current && !aboutMenuRef.current.contains(event.target)){
              setMenuOpen(false)
            }
        }
        document.addEventListener('click', handleClickOutside)
        return ()=>{
          document.removeEventListener('click', handleClickOutside)
        }
  }, [])
  return (
    <div className="relative"  ref={aboutMenuRef}>
        <button onClick={()=>{setMenuOpen(!MenuOpen)}} className={` text-gray-600 hover:text-orange-600 cursor-pointer px-4 py-2`}>
            {buttonContent}
        </button>
        <div className={`mobile-dropdown-menu shadow-lg ${MenuOpen ? ' open' : ''}`}>
            { items.map((item, index) => (
                <Link key={index} to={item.path} className="text-gray-600 hover:text-orange-600 px-8 py-2">
                    {item.content}
                </Link>
            ))}
        </div>
    </div>
  )
}
