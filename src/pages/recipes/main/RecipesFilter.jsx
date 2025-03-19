import React from 'react'
import foodCategories from '../../../data/categories.json'

export default function RecipesFilter() {
  return (
    <aside className='w-full lg:w-76 flex-shrink-0 hidden lg:flex mb-10'>
        <div className="space-y-6 sticky top-20 left-0">
        <div className="pb-4 pl-20">
        <select className="p-2 border rounded-lg mb-5">
            <option>Сначала популярные</option>
            <option>Новые</option>
            <option>С высоким рейтингом</option>
        </select>
            <h3 className="font-bold mb-3">Категории</h3>
            <ul className="space-y-2">
            {['Завтраки', 'Супы', 'Десерты'].map(cat => (
                <li key={cat} className="flex items-center">
                <input type="checkbox" id={cat} className="mr-2"/>
                <label htmlFor={cat}>{cat}</label>
                </li>
            ))}
            </ul>
            {foodCategories.categories.map((item, index)=>(
            <div key={index} className="">
            <h3 className="font-bold mb-3 mt-3">{item.name}</h3>
            <ul className="space-y-2">
            {item.items.map((category, i) => (
                <li key={i} className="flex items-center">
                <input type="checkbox" id={i} className="mr-2"/>
                <label htmlFor={category.slug}>{category.name}</label>
                </li>
            ))}
            </ul>
            </div>
            ))
            }
        </div>

        <div className="pb-4 pl-20">
            <h3 className="font-bold mb-3">Время приготовления</h3>
            <div className="flex gap-2">
            <input 
                type="number" 
                placeholder="От" 
                className="w-20 p-2 bg-gray-200 border border-gray-200 focus:outline-none focus:border-gray-400 rounded"
            />
            <input 
                type="number" 
                placeholder="До" 
                className="w-20 p-2 bg-gray-200 border border-gray-200 focus:outline-none focus:border-gray-400 rounded"
            />
            <span className="self-center">минут</span>
            </div>
        </div>

        <button className="w-50 bg-orange-500 text-white p-2 rounded-lg ml-20">
            Сбросить фильтры
        </button>
        </div>
    </aside>
  )
}
