import React from 'react'
import Test from '../Test'
import cards from '../../../../data/popularRecipes.json'
import { useState } from 'react'
import Card from '../../../../components/ui/Card/Card'
import './RecipesResult.css'


export default function RecipesResult() {
    const [currentPage, setCurrentPage] = useState(1)
    const [cardsPerPages] = useState(16)
    
    const handleClick = () => {
      const timer = setTimeout(() => {
      window.scrollTo({
        top:0,
        behavior: 'smooth',
      })}, 100)
      return ()=> clearTimeout(timer)
    }
    const indexOfTheLastCard = currentPage*cardsPerPages
    const indexOfTheFirstCard = indexOfTheLastCard - cardsPerPages
    const currentCards = cards.slice(indexOfTheFirstCard, indexOfTheLastCard)
    const totalPages= Math.ceil(cards.length/cardsPerPages)

    const renderPageNumbers = () => {
      const pages = [];
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <button
            key={i}
            onClick={() => {setCurrentPage(i); handleClick()}}
            className={currentPage === i ? 'active page-num' : 'page-num'}
          >
            {i}
          </button>
        )
      }
      return pages
    }
  return (
    <main className="min-h-screen flex-1">
    {/* Пагинация */}
    <div className="mt-8 flex justify-left lg:ml-5 gap-2">
    <div className='relative select-none'>
    </div>
    <div className='grid grid-cols-2 gap-4 lg:grid-cols-3 mx-auto 2xl:grid-cols-4'>
    {currentCards.map((item, index)=>(
        <Card 
        key={`${currentPage}-${index}`}
        name={item.name}
        time={item.time} 
        rating={item.rating}
        saves={item.saves}
        url={item.url}
      />
    ))}
      </div>
    </div>
    <div className="pagination flex justify-center my-10 mx-auto">
        <button 
          className='rounded-full w-[100px] border-none cursor-pointer'
          onClick={()=>{setCurrentPage(currentPage-1); handleClick()}}
          disabled={currentPage===1}>
            Предыдущая
        </button>
        {renderPageNumbers()}
        <button 
          className='rounded-full w-[100px] border-none cursor-pointer'
          onClick={()=>{
            setCurrentPage(currentPage+1); 
            handleClick();
          }}
          disabled={currentPage===Math.ceil(cards.length/cardsPerPages)}>
            Следующая
        </button>
    </div>
  </main>
  )
}
