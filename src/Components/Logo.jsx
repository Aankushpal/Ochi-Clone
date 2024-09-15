import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const Logo = () => {

    const scrollref = useRef();
    // gsap animation here...

    useGSAP(()=>{
        gsap.to(scrollref.current, {
            scrollTrigger:{
               trigger: scrollref.current,
               start: "top top",
               end: "top -100%",
            //    markers: true,
               pin: true,
               scrub: 2,
            },
        });
    })

    return (
        <>
            <div ref={scrollref} className="bg w-full bg-[#F1F1F1] h-screen px-14 pt-14 flex gap-5">
                <div className="in1 bg-[#004D43] rounded-2xl w-1/2 h-2/3 flex items-center justify-center relative">
                  <img className='scale-[1.5] object-fit' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                  <h5 className='absolute text-[#CDEA68] bottom-8 left-8 border-[.1vw] px-3 py-1 rounded-full border-[#CDEA68] '>@2019-2023</h5>
                </div>
                <div className="in1 bg-[#212121] rounded-2xl w-[23vw] h-2/3 flex items-center justify-center relative">
                    <img className='object-fit scale-[1.3]' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                  <h5 className='absolute text-[#f1f1f1] bottom-8 left-8 border-[.1vw] px-3 py-1 rounded-full border-[#f1f1f1] uppercase tracking-tight cursor-pointer'>Rating 5.0 on clutch</h5>
                </div>
                <div className="in1 bg-[#212121] rounded-2xl w-[23vw] h-2/3 flex items-center justify-center relative">
                    <img className='scale-[.5] object-fit' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                    <h5 className='absolute text-[#f1f1f1] bottom-8 left-8 border-[.1vw] px-3 py-1 rounded-full border-[#f1f1f1] uppercase tracking-tight cursor-pointer'>Business bootcamp alumni</h5>
                </div>
            </div>
        </>
    )
}

export default Logo