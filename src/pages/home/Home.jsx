import React from 'react'
import Hero from './hero-section/Hero'
import Category from './categories/Category'

export default function Home() {
  return (
    <div className="container">
      <Hero/>
      <Category/>
    </div>
  )
}
