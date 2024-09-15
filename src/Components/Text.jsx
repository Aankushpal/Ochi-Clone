import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

const Text = () => {

  return (
    <div data-scroll data-scroll-speed="-.5" className="pt-1 w-full h-[40vw] z-[1]">
      <div className="textstrctr mt-[7vw] ml-12 text-[#212121]  leading-[6vw]">
        {["We Create", "EYE-OPENING", "PRESENTATIONS"].map((items, index) => (
          <div className="masker uppercase">
            <div className="flex items-end">
              {index === 1 && (
                <motion.div initial={{ width: "0" }} animate={{ width: "8vw" }} transition={{ ease: [0.76, 0, 0.5, 0], duration: .8 }} className="w-[8vw] h-[5vw] rounded-md overflow-hidden">
                  <img className='w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
                </motion.div>
              )}
              <h1 className="font-['Founders Grotesk'] font-bold tracking-[-.5vw] text-[7vw]">{items}</h1>
            </div>
          </div>
        ))}
      </div>
      <div className="br w-full border-t-[.05vw] border-[#4747475f] mt-28 flex items-center justify-between py-3 px-10">
        {["For public and private companies", "From the first pitch to IPO"].map((items, index) => (
          <p key={index} className="tracking-tighter text-[#4f4f4fe8] font-medium">{items}</p>
        ))}
        <div className="start flex items-center gap-2  cursor-pointer">
          <p className="border-[.1vw] overflow-hidden rounded-full border-[#1f1f1f] px-5 py-1 tracking-tight font-medium text-[#3c3b3be8]">START THE PROJECT</p>
          <div className="border-[.1vw]  rounded-full border-[#1f1f1f] p-2 rotate-45  text-[#333131e8]"><FaArrowUpLong /></div>
        </div>
      </div>
    </div>
  )
}

export default Text