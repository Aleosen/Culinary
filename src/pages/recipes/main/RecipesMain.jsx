import React from 'react'
import RecipesFilter from './RecipesFilter'
import RecipesResult from './RecipesResult'

export default function RecipesMain() {
  return (
    <div className='flex flex-col lg:flex-row gap-8 min-h-screen'>
      <RecipesFilter/>
      <RecipesResult/>
    </div>
  )
}
