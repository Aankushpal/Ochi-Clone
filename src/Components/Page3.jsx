import React from 'react'

const Page3 = () => {

    return (
        <div data-scroll data-scroll-speed="-.15" className="w-full min-h-[100vh] bg-[#CDEA68] py-20 font-['Neue Monteral Regular']">
            <div className="in1 w-full  px-12 ">
                <p className="text-[3.9vw] tracking-tighter leading-none text-[#292929]">Ochi is a strategic partner for fast-growing tech <br /> businesses that need to <u>raise funds</u>, <u> sell products, <br /> explain complex ideas,</u> and <u>hire great people.</u>
                </p>
            </div>
            <br />
            <div className="in2 w-full border-t-[1px] mt-10 text-zinc-800 border-[#29292968] pl-12 pt-4 pr-52 flex  justify-between">
                <h5>What you can expect:</h5>
                <div className="two w-[35vw] flex justify-between">
                    <div className="pr1 w-72 flex flex-col gap-10">
                        <h5>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether its live or digital, delivered for one or a hundred people.</h5>
                        <h5>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</h5>
                    </div>
                    <div className="pr2 pt-[5vw] flex flex-col gap-1">
                        <h5 className="mb-5">S:</h5>
                        {["Instagram", "Behance", "Facebook", "LinkedIn"].map((items, index) => (
                            <a key={index}><u>{items}</u></a>
                        ))}
                    </div>
                </div>
            </div>
            <div className="in3 w-full border-t-[1px] mt-[8vw] px-12 pt-8 flex gap-[20vw] border-[#29292968] ">
                <div className="pr1">
                <h1 className="text-[4vw] tracking-tight font-regular">Our approach:</h1>
                <h5 className="text-[#ffffffe8] text-sm font-normal bg-black w-fit px-8 py-4 rounded-full">READ MORE </h5>
                </div>
                <div className="pr2">
                    <div className="img w-[47vw] rounded-xl bg-slate-500 overflow-hidden">
                    <img className='object-cover w-full h-full' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page3