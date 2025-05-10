import React from 'react'
import TypeScript from './TypeScript'
import Button from './Button'


const Section = () => {
  return (
    <section className="first flex justify-around mx-20  mt-24 ">
      <div className="leftSection  w-2/6 text-4xl m-20 mt-36 mb-12"> Hello, I am <span className="c text-violet-600">Aditya</span>
        <div className=" mt-3">I am a web devloper </div>
        <div className="mt-2 text-purple-400 "><TypeScript /></div>
        <Button />
      </div>
      <div className="rightSection w-2/6"> <img className=" w-80 m-10 h-96" src="images/img3.png" alt="" /> </div>

    </section>
  )
}

export default Section
