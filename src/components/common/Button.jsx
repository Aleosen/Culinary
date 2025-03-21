import React from 'react'
import { Link } from 'react-router-dom'
export default function Button({classes, path, click, children}) {
  const handleClick = () => {
    // Прокручиваем страницу в начало
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Плавная прокрутка
    });
    if(click)
      click()
  };
  return (
    <Link 
    to={path} 
    className={classes+" text-white cursor-pointer px-4 py-2 rounded-lg hover:opacity-80"}
    onClick={handleClick}>
    {children}
    </Link>
  )
}
