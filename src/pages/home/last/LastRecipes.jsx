import React from 'react'
import recipes from '../../../data/popularRecipes.json'
import styles from './LastRecipes.module.css'
import Button from '../../../components/common/Button'
export default function LastRecipes() {
  return (
    <section className='w-[calc(100%-20px)] lg:w-[1020px] mx-auto p-5'>
        <h1 className='text-3xl lg:text-4xl font-bold my-5 ml-27 mt-20'>Новые рецепты</h1>
        <div className="flex flex-wrap w-136 lg:w-202 p-2 mx-auto">
            {
                recipes.slice(0,6).map((item, index)=>(
                    <div key={index} className={styles['item-container']+" w-60 h-80 m-3 p-2"}>
                        <div className="relative h-50 w-full">
                            <img 
                                loading='lazy'
                                src={item.url} 
                                alt={item.name}
                                className="h-50 w-full object-cover rounded-t-lg pointer-events-none"
                            />
                        </div>
                        <h3 className="text-xl font-bold mt-1 mb-1 whitespace-nowrap overflow-hidden text-ellipsis">{item.name}</h3>
                        <div className="flex justify-between text-gray-600 items-center">
                            <span className=""><span className='text-amber-300'>&#9733;</span>{` ${item.rating}`}</span>
                            <span className="">&#128293;{` ${item.time}`}</span>
                        </div>
                            <div className="flex mt-2 justify-between">
                                <div className="flex items-center ">
                                    <button className='text-2xl text-orange-300 mr-1 cursor-pointer hover:text-orange-500'>&#x2764;</button>
                                    <span>{`${item.saves}`}</span>
                                </div>
                                <Button path='/recipes' classes={'bg-green-500'}>
                                    Подробнее
                                </Button>
                            </div>
                                </div>
                ))
            }
        </div>
    </section>
  )
}
