import React from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function CricketScoring() {
  return (
    <div className='flex justify-between  items-center flex-col bg-gray-100 h-screen'>
        <NavBar/>
        <div className='h-[200px] bg-red-500 my-5 '> hello</div>
        <Footer/>
    </div>
  )
}

export default CricketScoring