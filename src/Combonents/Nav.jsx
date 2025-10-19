
import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav className="bg-gray-800 p-4 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto">

        <div className="flex space-x-8">
          <Link
            to="/home"
            className="text-white hover:text-pink-400 transition duration-300 border-b-2 border-transparent hover:border-pink-400 pb-1"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-pink-400 transition duration-300 border-b-2 border-transparent hover:border-pink-400 pb-1"
          >
            About
          </Link>
          <Link
            to="/profile"
            className="text-white hover:text-pink-400 transition duration-300 border-b-2 border-transparent hover:border-pink-400 pb-1"
          >
            Profile
          </Link>
        </div>

        
        <Link
          to="/register"
          className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded transition duration-300"
        >
          Register
        </Link>
      </div>
    </nav>
  )
}

export default Nav

