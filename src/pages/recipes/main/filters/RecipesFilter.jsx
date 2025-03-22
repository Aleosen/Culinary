import React, { useState } from 'react'
import foodCategories from '../../../../data/categories.json'
import Button from '../../../../components/common/Button'
import InputDropDown from '../../../../components/ui/DropDowns/InputDropDown'
import './RecipesFilter.css'
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";
export default function RecipesFilter() {
    const [inputValue, setInputValue] = useState(180)
    const [MenuOpen, setMenuOpen] = useState(false)
    const [checkBoxes, setCheckBoxes] = useState(foodCategories.categories.map(category => (
        category.items.map(()=>true)
    )))
    const resetAll = () => {
        setInputValue(180)
        setCheckBoxes(prev=>prev.map(category => (
            category.map(()=>true))))
    }
    const handleChangeCheckBoxes = (categoryIndex, itemIndex) => {
        setCheckBoxes( (prev) => {
            const newCheckBoxes = [...prev]
            newCheckBoxes[categoryIndex] = [...newCheckBoxes[categoryIndex]]
            newCheckBoxes[categoryIndex][itemIndex] = !newCheckBoxes[categoryIndex][itemIndex]
            return newCheckBoxes
        })
    }
    const handleMenuOpenClick = () => {
      setMenuOpen(!MenuOpen)
    }
    const handleClick = () => {
        const timer = setTimeout(() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            });
          }, 100); 
          return () => clearTimeout(timer);
    }
    const handleChange = (event) => {
        setInputValue(event.target.value)
    }
  return (
    <aside className='max-w-124 lg:max-w-76 flex-shrink-0 lg:flex h-full ml-20 lg:ml-0'>
    <div className="space-y-6 hidden lg:flex w-full h-full">
    {/* Фиксируем блок с фильтрами */}
    <div className="top-20 left-0">
      <div className="pb-4 pl-20">
        <select className="p-2 border rounded-lg mb-5">
          <option>Сначала популярные</option>
          <option>Новые</option>
          <option>С высоким рейтингом</option>
        </select>
        <h3 className="font-bold mb-3">Категории</h3>
        {foodCategories.categories.map((category, index) => (
          <InputDropDown 
            key={index}
            buttonContent={category.name} 
            items={category.items}
            checks={checkBoxes[index]}
            onChangeCheckBoxes={itemIndex => handleChangeCheckBoxes(index, itemIndex)}
          />
        ))}
      </div>

      <div className="pb-4 pl-20">
        <h3 className="font-bold mb-3">Время приготовления</h3>
        <div className="flex flex-col gap-2">
          <input 
            id='time' 
            type="range" 
            min="0" 
            max="180" 
            step="5" 
            value={inputValue} 
            onChange={handleChange}
          /> 
          <p className="self-center">&#128293; до {inputValue} минут</p>
        </div>
      </div>
    <div className="flex pl-20 gap-2">
      <Button path='/recipes' onClick={handleClick} classes='bg-green-500'>
        Применить
      </Button>
      <Button click={resetAll} classes='bg-orange-500'>
        Сбросить
      </Button>
    </div>
    </div>
  </div>


  <button 
  className='lg:hidden px-6 py-2 border-none text-gray-700 border flex items-center' 
  onClick={handleMenuOpenClick}>
  <span className='mr-2'>Фильтры</span>
  {MenuOpen ? <SlArrowUp /> : <SlArrowDown />}
</button>
<div className={`filter-menu ${MenuOpen ? 'open' : ''} mt-5 lg:hidden space-y-6 w-full`}>
    <div className="">
      <div className="pb-4">
        <select className="p-2 border rounded-lg mb-5">
          <option>Сначала популярные</option>
          <option>Новые</option>
          <option>С высоким рейтингом</option>
        </select>
        <h3 className="font-bold mb-3">Категории</h3>
        <div className="flex">
        {foodCategories.categories.map((category, index) => (
          <InputDropDown 
            key={index}
            buttonContent={category.name} 
            items={category.items}
            checks={checkBoxes[index]}
            onChangeCheckBoxes={itemIndex => handleChangeCheckBoxes(index, itemIndex)}
          />
        ))}
        </div>
      </div>

      <div className="pb-4">
        <h3 className="font-bold mb-3">Время приготовления</h3>
        <div className="flex flex-col gap-2 w-60">
          <input 
            id='time' 
            type="range" 
            min="0" 
            max="180" 
            step="5" 
            value={inputValue} 
            onChange={handleChange}
          /> 
          <p className="self-center">&#128293; до {inputValue} минут</p>
        </div>
      </div>
    <div className="flex gap-2">
      <Button path='/recipes' onClick={handleClick} classes='bg-green-500'>
        Применить
      </Button>
      <Button click={resetAll} classes='bg-orange-500'>
        Сбросить
      </Button>
    </div>
    </div>
  </div>
</aside>
  )
}
