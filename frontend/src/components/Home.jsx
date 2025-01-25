import React from 'react'
import Hero from '../Home/Hero'
import Navbar from '../Home/Navbar';
import Features from '../Home/Features';
import Chellenges from '../Home/Challenges';
function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Features></Features>
      <Chellenges></Chellenges>
    </>
  )
}

export default Home