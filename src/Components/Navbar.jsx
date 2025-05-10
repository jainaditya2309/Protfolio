import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex justify-around items-center h-16 bg-blue-950">
      <div className="left text-2xl">Aditya's Portfolio </div>
      <div className="right ">
        <ul className="flex justify-center gap-12">
         <a href="/"> <li className="mx2 my-4 cursor-pointer hover:text-purple-400 hover:text-lg">Home</li></a>
          <li className="mx2 my-4 cursor-pointer hover:text-purple-400 hover:text-lg">About</li>
          <li className="mx2 my-4 cursor-pointer hover:text-purple-400 hover:text-lg">Project</li>
          <li className="mx2 my-4 cursor-pointer hover:text-purple-400 hover:text-lg">Skills</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
