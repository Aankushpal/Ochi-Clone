import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef, useState } from 'react'

gsap.registerPlugin(ScrollTrigger)

const Ready = () => {
    
    const [rotate, setRotate] = useState(0);

    useEffect(() => {
     window.addEventListener('mousemove', (e) => {
         let mouseX = e.clientX;
         let mouseY = e.clientY;
 
         let deltaX = mouseX - window.innerWidth / 2;
         let deltaY = mouseY - window.innerHeight / 2;
 
         let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
         setRotate(angle-180);
        
     })
    })

    // gsap animation here...
    // const scrollref = useRef();

    useGSAP(()=>{
        gsap.to(".page1", {
            scrollTrigger:{
               trigger: ".page1",
               start: "top -100%",
               end: "top -100%",
            //    markers: true,
               pin: true,
               scrub: 2,
            },
        });
    })

  return (
    <>
        <div data-scroll data-scroll-speed="-1" className="page1 w-full h-[140vh] overflow-hidden bg-[#f1f1f1]">
        <div className="bg relative w-full h-full pt-[10vw] bg-cover bg-center bg-[#CDEA68] font-['Founders Grotesk']">
            <h1 className='text-[12vw] font-bold text-center leading-none tracking-tighter'>READY <br /> TO START <br />THE PROJECT</h1>
            <h5 className='w-fit ml-[50%] -translate-x-1/2 mt-14 border-[.1vw] overflow-hidden rounded-full bg-[#1f1f1f] text-white border-[#1f1f1f] px-10 py-4 tracking-tight font-normal text-[1.2vw] cursor-pointer'>START THE PROJECT</h5>
            <div data-scroll data-scroll-speed=".3" className="flex gap-12 absolute top-[30%] left-[35%] -translate-x-[50%] -translate-y-[50%]">
                <div className="bg-zinc-100 w-[14vw] h-[14vw] relative rounded-full flex items-center justify-center">
                    <div className="w-2/3 h-2/3 bg-zinc-900 relative flex justify-center items-center rounded-full">
                        <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                            <div className="w-5 h-5 bg-zinc-100 rounded-full"></div>
                        </div>
                    </div>
                </div>
                <div className="bg-zinc-100 w-[14vw] h-[14vw] relative rounded-full flex items-center justify-center">
                <div className="w-2/3 h-2/3 bg-zinc-900 relative flex justify-center items-center rounded-full">
                        <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                            <div className="w-5 h-5 bg-zinc-100 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Ready