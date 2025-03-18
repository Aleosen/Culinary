import React from 'react'
import Photo from '../../../assets/images/Hero.jpg'
import Button from '../../../components/common/Button'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className='relative flex h-96 w-[calc(100%-20px)] lg:w-[1020px] mx-auto'>
      <img className='h-96 w-full overflow-hidden object-cover rounded-3xl' src={Photo} alt="" />
      <div className='absolute inset-0 bg-black opacity-60 w-full rounded-3xl'/>
      <div className={styles.field}>
        <h1 className='text-white text-2xl lg:text-4xl font-bold my-4'>Готовить можно вкусно, просто и с удовольствием!</h1>
        <h2 className='text-white text-1xl lg:text-3xl font-medium my-4'>Множество рецептов для каждого дня.</h2>
      <div className="flex min-w-100">
        <Button path='/recipes' classes={'bg-green-500 mx-4'}>
            Найти рецепт
        </Button>
        <Button path='/add-recipe' classes={'bg-orange-500'}>
            Поделиться рецептом
        </Button>
      </div>
      </div>
    </section>
  )
}
