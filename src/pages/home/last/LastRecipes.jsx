import React from 'react'
import recipes from '../../../data/popularRecipes.json'
import Button from '../../../components/common/Button'
import Card from '../../../components/ui/Card'
export default function LastRecipes() {
  return (
    <section className='w-[calc(100%-20px)] lg:w-[1020px] mx-auto p-5'>
        <h1 className='text-3xl lg:text-4xl font-bold my-5 ml-27 mt-20'>Новые рецепты</h1>
        <div className="flex flex-wrap w-136 lg:w-202 p-2 mx-auto">
            {
                recipes.slice(0,6).map((item, index)=>(
                    <Card 
                            key={index}
                            name={item.name}
                            time={item.time} 
                            rating={item.rating}
                            saves={item.saves}
                            url={item.url}
                          />
                ))
            }
        </div>
    </section>
  )
}
