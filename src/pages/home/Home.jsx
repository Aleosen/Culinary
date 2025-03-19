import React from 'react'
import Hero from './hero-section/Hero'
import Category from './categories/Category'
import WeeklyPopular from './popular/WeeklyPopular'
import LastRecipes from './last/LastRecipes'
import Advantages from './advantages/Advantages'
import Community from './community/Community'
import Footer from '../../components/layout/footer/Footer'
export default function Home() {
  return (
    <main className="mt-20">
      <Hero/>
      <Category/>
      <WeeklyPopular/>
      <LastRecipes/>
      <Advantages/>
      <Community/>
    </main>
  )
}
