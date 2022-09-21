import React, { useEffect, useState } from 'react'
import axios from 'axios'
import iconDice from './assets/icon-dice.svg'
import dividerMobile from './assets/pattern-divider-mobile.svg'
import dividerDesktop from './assets/pattern-divider-desktop.svg'


const App = () => {
   const [request, setRequest] = useState('https://api.adviceslip.com/advice')
   const [advice, setAdvice] = useState('')
   

   const getAdvice = () => {
            /* data length  = 224*/
      setRequest(`https://api.adviceslip.com/advice/${Math.floor(Math.random() * 224) + 1}`);
   }

   useEffect(() => {
      axios.get(request)
      .then(res => {
         setAdvice(res.data.slip)
  
      }).catch(err => {
         console.log(err);
      })
   },[request])

  return (
    <div className='h-screen bg-darkBlue font-Manrope pt-32 md:pt-56 px-4'>

         <div className='relative flex flex-col justify-center items-center text-center rounded-lg bg-darkGrayBlue md:w-[34rem] px-6  pb-1 md:pb-6 pt-7 mx-auto'>

            <p className='text-neonGreen my-3 text-xs  md:text-base tracking-widest'>ADVICE # {advice.id}</p>
            <q className='text-qoute text-lightCyan my-3'>{advice.advice}</q>

            <img src={dividerMobile} alt="" className=' my-3 mb-10 md:hidden'/>
            <img src={dividerDesktop} alt="" className=' my-3 mb-10 hidden md:block'/>

            <button className='absolute -bottom-8 p-5 rounded-full bg-neonGreen max-w-max outline-none hover:shadow-btnNeonGreen duration-500 ease-in-out' onClick={getAdvice}>
               <img src={iconDice} alt="" />
            </button>

         </div>
         
   </div>
  )
}

export default App