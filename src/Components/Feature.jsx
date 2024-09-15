import { motion, useAnimation } from 'framer-motion';
import React, { useState } from 'react';

function Feature() {
    const cards = [useAnimation(), useAnimation()];

    const handleHover = (index) => {
        cards[index].start({y: "0"})
    };

    const handleLeave = (index) => {
        cards[index].start({y: "100%"})
    };

    return (
        <div className='w-full bg-[#F1F1F1] py-20'>
            <div className="w-full border-b-[.1vw] border-zinc-400 text-black text-[3.5vw] font-thin pl-14 pb-8 font-['Neue_Montreal']">
            <h1>Featured projects</h1>
            </div>
            <div className="pic w-full relative px-14 flex mt-10 gap-4">
                <div className="in1 w-1/2 h-[85vh]">
                    <h5 className='uppercase ml-8 mb-6 font-["Neue_Montreal"] tracking-tight text-base'>Cardboard Spaceship</h5>
                    <motion.div onHoverStart={()=> handleHover(0)} onHoverEnd={()=> handleLeave(0)} className="card relative w-full h-full">
                        <h1 className='w-full overflow-hidden absolute left-full top-1/2 -translate-x-1/2 -translate-y-1/2 z-[9] text-[#CDEA68] font-bold text-[4vw] uppercase font-["Founders Grotesk"] tracking-tight'>
                        {"Cardboard Spaceship".split('').map((items, index) =>
                            <motion.span initial={{y:"100%"}} animate={cards[0]} transition={{ease:[0.22, 1, 0.36, 1], delay: index*.02}} className=' inline-block'>{items}</motion.span>
                        )}
                        </h1>
                        <img className='w-full h-full bg-cover rounded-2xl' src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png" alt="" />
                    </motion.div>
                </div>
                <div className="in1 w-1/2 h-[85vh]">
                <h5 className='uppercase ml-8 mb-6 font-["Neue_Montreal"] tracking-tight text-base'>AH2 & Matt Horn</h5>
                <motion.div onHoverStart={()=> handleHover(1)} onHoverEnd={()=> handleLeave(1)} className="card relative w-full h-full rounded-2xl">
                <h1 className='w-full absolute overflow-hidden right-full top-1/2 translate-x-1/2 -translate-y-1/2 z-[9] text-[#CDEA68] font-bold text-[4vw] uppercase font-["Founders Grotesk"] tracking-tight'>
                        {"AH2 & Matt Horn".split('').map((items, index) =>
                             <motion.span initial={{y:"100%"}} animate={cards[1]} transition={{ease:[0.22, 1, 0.36, 1], delay: index*.03}} className= {`inline-block ${(index === 4 || index === 6) && "ml-4"}`}>{items}</motion.span>
                        )}
                        </h1>
                    <img className='w-full h-full bg-cove rounded-2xl' src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png" alt="" />
                </motion.div>
                </div>
            </div>

            <div className="pic w-full relative px-14 flex mt-24 gap-4">
                <div className="in1 w-1/2 h-[85vh]">
                    <h5 className='uppercase ml-8 mb-6 font-["Neue_Montreal"] tracking-tight text-base'>FYDE</h5>
                    <motion.div onHoverStart={()=> handleHover(0)} onHoverEnd={()=> handleLeave(0)} className="card relative w-full h-full">
                        <h1 className='w-full overflow-hidden absolute left-[42%] top-1/2 translate-x-1/2  -translate-y-1/2 z-[9] text-[#CDEA68] font-bold text-[4vw] uppercase font-["Founders Grotesk"] tracking-tight'>
                        {"FYDE".split('').map((items, index) =>
                            <motion.span initial={{y:"100%"}} animate={cards[0]} transition={{ease:[0.22, 1, 0.36, 1], delay: index*.02}} className=' inline-block'>{items}</motion.span>
                        )}
                        </h1>
                        <img className='w-full h-full bg-cover rounded-2xl' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                    </motion.div>
                </div>
                <div className="in1 w-1/2 h-[85vh]">
                <h5 className='uppercase ml-8 mb-6 font-["Neue_Montreal"] tracking-tight text-base'>VISE</h5>
                <motion.div onHoverStart={()=> handleHover(1)} onHoverEnd={()=> handleLeave(1)} className="card relative w-full h-full rounded-2xl">
                <h1 className='w-full absolute overflow-hidden right-[27vw] top-1/2 translate-x-1/2 -translate-y-1/2 z-[9] text-[#CDEA68] font-bold text-[4vw] uppercase font-["Founders Grotesk"] tracking-tight'>
                        {"VISE".split('').map((items, index) =>
                             <motion.span initial={{y:"100%"}} animate={cards[1]} transition={{ease:[0.22, 1, 0.36, 1], delay: index*.03}} className= {`inline-block ${(index === 4 || index === 6) && "ml-4"}`}>{items}</motion.span>
                        )}
                        </h1>
                    <img className='w-full h-full bg-cove rounded-2xl' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Feature;