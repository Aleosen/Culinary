import React from 'react'
import { Link } from 'react-router-dom'
export default function Button({classes, path, children}) {
  return (
    <Link 
    to={path} 
    className={classes+" text-white cursor-pointer px-4 py-2 rounded-lg hover:opacity-80"}>
    {children}
    </Link>
  )
}
