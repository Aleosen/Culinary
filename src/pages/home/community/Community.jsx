import React from 'react'
import Button from '../../../components/common/Button'
import { Link } from 'react-router-dom'
export default function Community() {
  return (
    <section className='w-[calc(100%-20px)] lg:w-[1020px] mx-auto p-5 select-none  mb-20'>
        <h1 className='text-3xl font-bold mt-20 mb-5'>
            Добро пожаловать
        </h1>
        <h2 className='text-2xl font-bold mb-10'>
            Присоединяйтесь к сообществу! Создайте аккаунт, чтобы сохранить ваши любимые рецепты
        </h2>
        <Button path='/register' classes={'bg-orange-500'}>
            Создать аккаунт
        </Button>
        <span className='text-2xl font-bold mb-10 ml-3'>
            Уже есть аккаунт? 
            <Link to="/login" className="text-gray-600 hover:text-orange-600 ml-3">
                Авторизация
            </Link>
        </span>
    </section>
  )
}
