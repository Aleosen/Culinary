import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../../assets/images/Logo.jpg'
import './NavBar.module.css'
import { motion } from 'framer-motion'
import './NavBar.module.css'
import Button from '../../common/Button'

export default function NavBar() {
    const [MenuOpen, setMenuOpen] = useState(false)
    const closeMenu = ()=>{
      setMenuOpen(false)
    }
    useEffect(() => {
      if (MenuOpen) {
        document.body.classList.add('menu-open');
      } else {
        document.body.classList.remove('menu-open');
      }
    }, [MenuOpen]);
  

  return (
    <nav className='fixed z-50 w-full max-h-15 bg-white shadow-lg' >
        <div className="w-screen md:max-w-screen mx-auto">
            <div className="flex justify-between items-center h-16 p-[10px]">
                <Link to='/' className='flex items-center hover:opacity-70'>
                    <img className='h-14' src={Logo} alt='logo'/>
                    <span className='text-2xl font-bold text-orange-600'>Приготовим?</span>
                </Link>
                <div className="hidden lg:flex space-x-8 items-center">
                    <Link to="/" className="text-gray-600 hover:text-orange-600">
                    Главная
                    </Link>
                    <Link to="/recipes" className="text-gray-600 hover:text-orange-600">
                    Рецепты
                    </Link>
                    <Button
                    path="/add-recipe"
                    classes="bg-green-500"
                    >
                    Добавить рецепт
                    </Button>
                    <Link to="/reviews" className="text-gray-600 hover:text-orange-600">
                    Советы
                    </Link>
                </div>
                <div className="hidden lg:flex items-center space-x-4">
                    <Link to="/login" className="text-gray-600 hover:text-orange-600">
                    Войти
                    </Link>
                    <Button
                    path="/signup"
                    classes="bg-orange-500"
                    >
                    Регистрация
                    </Button>
                </div>
                <button
                    className="lg:hidden p-2 cursor-pointer"
                    onClick={() => setMenuOpen(!MenuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
            
            {MenuOpen && (
          <motion.div onClick={() => setMenuOpen(false)}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="fixed max-h-80 inset-0 z-50 bg-opacity-50"> {/* Затемнение */}
          <div className="fixed top-15 left-0 w-full bg-white z-50 shadow-lg"> {/* Белый фон + тень */}
            <Link onClick={closeMenu} to="/" className="block z-50 px-4 py-2 text-gray-600 hover:bg-gray-100">
              Главная
            </Link>
            <Link onClick={closeMenu} to="/recipes" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
              Рецепты
            </Link>
            <Link onClick={closeMenu} to="/add-recipe" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
              Добавить рецепт
            </Link>
            <Link onClick={closeMenu} to="/reviews" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
              Советы
            </Link>
            <div className="border-t mt-2 pt-2">
              <Link onClick={closeMenu} to="/login" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
                Войти
              </Link>
              <Link onClick={closeMenu} to="/signup" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
                Регистрация
              </Link>
            </div>
            </div>
          </motion.div>
        )}
        </div>
    </nav>
  )
}
