import React from 'react'
import RecipeHeader from './header/RecipeHeader'
import RecipesMain from './main/RecipesMain'

export default function Recipes() {
  return (
    <main className='mt-20'>
      <RecipeHeader/>
      <RecipesMain/>
    </main>
  )
}
