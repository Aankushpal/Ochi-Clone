import { motion } from 'framer-motion'
import LocomotiveScroll from 'locomotive-scroll'
import React from 'react'

function Page2() {

  return (
    <div data-scroll data-scroll-speed=".01" className='w-full py-20 font-["Neue Monteral Regular"] z-[10] rounded-2xl bg-[#004D43]'>
            <div className="flex text-center justify-center items-center text-[#f1f1f1] border-t-2  border-[#f1f1f163] border-b-2 whitespace-nowrap overflow-hidden ">
                <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 8}} className='text-[16vw] leading-[15vw] mb-6 pr-10 font-bold tracking-tighter'>WE ARE OCHI</motion.h1>
                <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 8}} className='text-[16vw] leading-[15vw] mb-6 pr-10 font-bold tracking-tighter'>WE ARE OCHI</motion.h1>
                <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 8}} className='text-[16vw] leading-[15vw] mb-6 pr-10 font-bold tracking-tighter'>WE ARE OCHI</motion.h1>
                <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 8}} className='text-[16vw] leading-[15vw] mb-6 pr-10 font-bold tracking-tighter'>WE ARE OCHI</motion.h1>
            </div>
    </div>
  )
}

export default Page2