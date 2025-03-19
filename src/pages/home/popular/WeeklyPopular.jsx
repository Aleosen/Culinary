import React, { useEffect, useRef } from 'react'
import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import popularRecipes from '../../../data/popularRecipes.json'
import Button from '../../../components/common/Button';

export default function WeeklyPopular() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const timerRef = useRef(null)
    const [autoPlay, setAutoPlay] = useState(true)

    const startAutoPlay = () => {
        timerRef.current = setInterval(nextSlide, 5000)
    }

    const stopAutoPlay = () => {
        clearInterval(timerRef.current)
    }
    const handleSlideClick = () => {
        setAutoPlay(false);
        stopAutoPlay();
        

        setTimeout(() => {
          setAutoPlay(true);
        }, 20000);
      };
    const handlers = useSwipeable({
        onSwipedLeft: () => nextSlide(),
        onSwipedRight: () => prevSlide(),
        trackMouse: true
    });

    const nextSlide = () => {
        setCurrentIndex(prev => 
        prev === popularRecipes.length - 1 ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex(prev => 
        prev === 0 ? popularRecipes.length - 1 : prev - 1
        );
    };
    useEffect(() => {
        if(autoPlay) {
            startAutoPlay()
        }
        return ()=> stopAutoPlay()
      }, [autoPlay, currentIndex]);

    const handleManualNavigation = () => {
        setAutoPlay(false);
        stopAutoPlay();
      };
  return (
    <section className='w-[calc(100%-20px)] lg:w-[1020px] mx-auto p-5 select-none'>
        <h1 className='text-3xl font-bold mt-20 mb-5'>
            Популярное на этой неделе
        </h1>
        <div className="relative overflow-hidden w-full">
      <div 
        {...handlers}
        className="flex transition-transform duration-300"
        style={{ 
          transform: `translateX(-${currentIndex * 100}%)`,
          width: `${popularRecipes.length * 100}%`
        }}
      >
        {popularRecipes.map((item, index) => (
          <div 
            key={index}
            className="w-full flex-shrink-0"
            style={{ width: `${100}%` }}
          >
            {/* Контент слайда */}
            <div className="relative mx-2 p-4 bg-white rounded-lg shadow-md"
                style={{ width: `${100/popularRecipes.length-1}%`}}
                onClick={handleSlideClick}
                onMouseEnter={()=>setAutoPlay(false)}
                onMouseLeave={()=>setAutoPlay(true)}>
                    <div className="relative h-48 lg:h-60 w-full mt-2">
                        <img 
                            loading='lazy'
                            src={item.url} 
                            alt={item.name}
                            className="h-48 lg:h-60 w-full object-cover rounded-t-lg pointer-events-none"
                        />
                        
                    </div>
              <h3 className="text-xl font-bold mt-2 mb-5">{item.name}</h3>
              <div className="flex justify-between text-gray-600 items-center">
                <span className=""><span className='text-amber-300'>&#9733;</span>{` ${item.rating}`}</span>
                <span className="">&#128293;{` ${item.time}`}</span>
              </div>
                <div className="flex mt-2 justify-between">
                    <div className="flex items-center ">
                        <button className='text-2xl text-orange-300 mr-1 cursor-pointer hover:text-orange-500'>&#x2764;</button>
                        <span>{`${item.saves}`}</span>
                    </div>
                    <Button path='/recipes' classes={'bg-orange-500'}>
                        Приготовить
                    </Button>
                </div>
            </div>
          </div>
        ))}
      </div>
      <button 
        onClick={()=> {prevSlide(); handleManualNavigation()}}
        className="cursor-pointer absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 py-2 px-4 rounded-full shadow-lg hover:bg-white hover:py-3 hover:px-5">
        &lsaquo;
      </button>
      <button 
        onClick={()=> {nextSlide(); handleManualNavigation()}}
        className="cursor-pointer absolute right-5 lg:right-10 top-1/2 -translate-y-1/2 bg-white/80 py-2 px-4 rounded-full shadow-lg hover:bg-white  hover:py-3 hover:px-5">
        &rsaquo;
      </button>
      <div className="flex justify-center space-x-2 mt-4">
        {popularRecipes.map((_, index) => (
          <button
            key={index}
            onClick={() => {setCurrentIndex(index); handleManualNavigation()}}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentIndex ? 'bg-orange-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
    </section>
  )
}
