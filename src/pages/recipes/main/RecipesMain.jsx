import React from 'react'
import RecipesFilter from './filters/RecipesFilter'
import RecipesResult from './cards-table/RecipesResult'

export default function RecipesMain() {
  return (
    <div className='flex flex-col lg:flex-row min-h-screen'>
      <RecipesFilter/>
      <RecipesResult/>
    </div>
  )
}
