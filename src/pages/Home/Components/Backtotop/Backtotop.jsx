import Lottie from 'lottie-react'
import React, { useEffect, useState } from 'react'

import rocket from "../../../../image/rocket.json"

const Backtotop = () => {

  const [Backtotop, setBacktotop]= useState(false)

useEffect(()=>{
  window.addEventListener("scroll",()=>{
    if (window.scrollY > 200) {
      setBacktotop(true)
    }else{
      setBacktotop(false)
    }
  })
},[])

const scroolUp =()=>{
  window.scrollTo({
    top: 0,
    behavior: "smooth"
    
  })
}

  return (
    <>
    {Backtotop && (
     <Lottie onClick={scroolUp} animationData={rocket} className=' fixed bottom-12 right-2 lg:right-12 h-24 w-24  z-40'></Lottie>
    )}
    </>
  )
}

export default Backtotop