import React, { useEffect, useRef, useState } from 'react';

function Eyes() {
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
    return (
        <>
        <div className="w-full h-screen overflow-hidden">
        <div data-scroll data-scroll-speed="-.7" className="bg relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]">
            <div data-scroll data-scroll-speed=".2" className="flex gap-12 absolute top-[40%] left-[35%] -translate-x-[50%] -translate-y-[50%]">
                <div className="bg-zinc-100 w-[14vw] h-[14vw] relative rounded-full flex items-center justify-center">
                    <div className="w-2/3 h-2/3 bg-zinc-900 relative flex justify-center items-center rounded-full">
                    <h1 className='text-white text-xl'>PLAY</h1>
                        <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                            <div className="w-5 h-5 bg-zinc-100 rounded-full"></div>
                        </div>
                    </div>
                </div>
                <div className="bg-zinc-100 w-[14vw] h-[14vw] relative rounded-full flex items-center justify-center">
                <div className="w-2/3 h-2/3 bg-zinc-900 relative flex justify-center items-center rounded-full">
                <h1 className='text-white text-xl'>PLAY</h1>
                        <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                            <div className="w-5 h-5 bg-zinc-100 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    );
}

export default Eyes;