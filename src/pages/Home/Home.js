import React from 'react'
import Hero from "../../components/Hero/Hero"
import Services from "../../components/Services/Services"
import CoreValue from "../../components/CoreValue/CoreValue"
import Aboutsection from "../../components/Aboutsection/Aboutsection"

const Home = () => {
  return (
    <div>
      <Hero />
      <Aboutsection/>
      <Services/> 
      <CoreValue /> 
    </div>
  )
}

export default Home