import React from 'react'
import styles from './Card.module.css'
import Button from '../../common/Button'
export default function Card({name, time, rating, saves, url}) {
  return (
      <div className={styles['item-container']+" w-60 h-80 m-3 p-2"}>
        <div className="relative h-50 w-full">
          <img 
            loading='lazy'
            src={url} 
            alt={name}
            className="h-50 w-full object-cover rounded-t-lg pointer-events-none"
          />
        </div>
          <h3 className="text-xl font-bold mt-1 mb-1 whitespace-nowrap overflow-hidden text-ellipsis">{name}</h3>
          <div className="flex justify-between text-gray-600 items-center">
            <span className=""><span className='text-amber-300'>&#9733;</span>{` ${rating}`}</span>
            <span className="">&#128293;{` ${time}`}</span>
          </div>
          <div className="flex mt-2 justify-between">
          <div className="flex items-center ">
            <button className='text-2xl text-orange-300 mr-1 cursor-pointer hover:text-orange-500'>&#x2764;</button>
            <span>{`${saves}`}</span>
          </div>
          <Button path='/recipes' classes={'bg-green-500'}>
            Подробнее
          </Button>
        </div>
      </div>
  )
}
