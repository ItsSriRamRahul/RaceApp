import React from 'react'
import { Link } from 'react-router-dom'
import { Menu,X,Bot
 } from 'lucide-react'
import { useState } from 'react'
function NavBar() {
    const [isclick,Click]=useState(false)
 const setState =() => {
  Click(!isclick)
  
 }
  return (
    <nav className="bg-black text-white p-4 z-10 w-full">
        <div className="container mx-auto flex justify-between items-center">
          <p to="/" className="text-2xl font-bold">
            RacingAhead
          </p>
          <div className="md:hidden">
            <button onClick={() => Click(!isclick)} className="focus:outline-none">
              {isclick ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <div
            className={`md:flex space-y-4 md:space-y-0 md:space-x-4 ${isclick ? "block" : "hidden"} absolute md:relative top-16 md:top-0 left-0 md:left-auto right-0 md:right-auto bg-black md:bg-transparent p-4 md:p-0`}
          >
            <Link to="/home" className="block md:inline-block hover:text-gray-300">
              Home
            </Link>
            <Link to="/ChatBot" className="block md:inline-block hover:text-gray-300">
            ChatBot
            </Link>
            <Link to="/MyTournament" className="block md:inline-block hover:text-gray-300">
              My Tournaments
            </Link>
            <Link to="/Admin" className="block md:inline-block hover:text-gray-300">
              Admin
            </Link>
            
          </div>
        </div>
      </nav>
  )
}

export default NavBar