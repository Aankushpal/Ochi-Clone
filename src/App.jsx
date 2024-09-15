import React from 'react'
import Navbar from './Components/Navbar'
import Text from './Components/Text'
import Page2 from './Components/Page2'
import Page3 from './Components/Page3'
import Eyes from './Components/Eyes'
import Feature from './Components/Feature'
import LocomotiveScroll from 'locomotive-scroll'
import Ready from './Components/Ready'
import Logo from './Components/Logo'
import Last from './Components/Last'

const App = () => {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full h-screen bg-[#F1F1F1] text-black'>
      <Navbar/>
      <Text/>
      <Page2/>
      <Page3/>
      <Eyes/>
      <Feature/>
      <Logo/>
      <Ready/>
      <Last/>
    </div>
  )
}

export default App