import React from 'react'
import foodCategories from '../../../data/categories.json'
import styles from './Category.module.css'
import { Link } from 'react-router-dom'

export default function Category() {

  return (
    <section className='w-[calc(100%-20px)] lg:w-[1020px] min-h-screen mx-auto'>
      <h1 className='text-2xl lg:text-4xl font-bold my-4'>Исследуйте категории</h1>
        { foodCategories.categories.map(category => (
        <div key={category.slug} className="relative block">
        <h2 className='my-5 text-2xl font-bold'>{category.name}:</h2>
        <div className="flex overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pb-2">
        {
            category.items.map(item => (
                <Link to={`/recipes/:${item.slug}`} key={item.id} className="shadow-md mx-5 relative cursor-pointer flex-shrink-0">
                    <img className='w-50 h-50 object-cover  rounded-2xl' src={`/src/assets/images/categories/${item.slug}.jpg`} alt="img" />
                    <div className="absolute inset-0 bg-black/50  rounded-2xl"></div>
                    <span className={styles.category + ' text-[20px] text-white font-bold'}>{item.name}</span>
                </Link>
            ))
          }
        </div>
          <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-white via-white/50 to-transparent pointer-events-none" />
      </div>
        ))}
        
    </section>
  )
}
