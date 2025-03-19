import React from 'react'
import { CiSearch } from "react-icons/ci";

export default function RecipeHeader() {
  return (
    <header className='mx-auto px-20 mb-10'>
      <div className="flex items-center justify-between mb-5">
        <h1 className='text-3xl'>База рецептов</h1>
        <span className="text-gray-600 ml-10">Найдено 245 рецептов</span>
        </div>
        <div className="relative">
        <input 
        type="text" 
        placeholder='Ищите по названию или ингридиентам...' 
        className='w-full p-4 bg-gray-200 border border-gray-200 focus:outline-none focus:border-gray-400'/>
        <button className='absolute right-3 top-[50%] text-3xl opacity-50 transform -translate-y-1/2 hover:cursor-pointer'>
            <CiSearch/>
        </button>
        </div>
    </header>
  )
}
