import React from 'react'

const Navbar = () => {

  
  return (
    <nav className='bg-[#F6F6F6] h-[70px] flex justify-between items-center px-8'>
      <div className=''>my portfolio</div>
      <ul className='flex space-x-6'>
        <li>Home</li>
        <li>About</li>
        <li>Work</li>
        <li>Skils</li>
      </ul>
      <button>Contact</button>
    </nav>
  )
}

export default Navbar

{/* <nav className="bg-[#F6F6F6] py-4 px-8 shadow-sm flex justify-between items-center">
      <div className="text-xl font-bold text-gray-800">MyPortfolio</div>
      <ul className="flex space-x-6 text-gray-700">
        <li className="hover:text-black transition-all cursor-pointer">Home</li>
        <li className="hover:text-black transition-all cursor-pointer">About</li>
        <li className="hover:text-black transition-all cursor-pointer">Projects</li>
        <li className="hover:text-black transition-all cursor-pointer">Skills</li>
      </ul>
      <button
        className="relative overflow-hidden px-6 py-2 rounded-full bg-black text-white font-semibold transition-transform duration-300 shadow-md hover:shadow-lg"
      >
        Contact Now
      </button>
    </nav> */}