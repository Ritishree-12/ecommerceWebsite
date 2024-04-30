import React from 'react'
import './Home.css'
// import client1 from './image/client1.png'
// import client2 from './image/client2.png'
// import client3 from './image/client3.png'
// import client4 from './image/client4.png'
import Banner from './components/Banner'
import Section2 from './components/section2/Section2'
import Section3 from './components/section3/Section3'
import Section4 from './components/section4/Section4'
import Section5 from './components/section5/Section5'
import Section6 from './components/section6/Section6'
import Section7 from './components/section7/Section7'
import Testomonial from './components/Testomonial/Testomonial'


function Home() {
  return (
    <div>
      <Banner />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Testomonial />
    </div>
  )
}

export default Home
