import React from 'react'

const Second = () => {
  return (
    <>
    <section className="second m-auto  mt-24  mx-56 h-64">
     <div className="ml-32"> <h1 className="text-3xl  ml-96">My Skills</h1></div>
    <div className="ml-40">  <span className=" ml-80 text-gray-300">What I have done so far </span>
      </div>
      <div className="box bg-white w-full h-0.5 m-14 flex mt-32">

        <div className=" vertical h-28 w-0.5 bg-white ml-32 mr-32">
          <div className="image w-24 relative   bottom-20 right-12 "> <img src="images/img1.png" alt="" /></div>
          <div className="title relative top-16 w-52 right-20">
            Frountend Developer</div>
          <div className="disc relative top-16 text-gray-300 w-48  right-20 text-xs ">
          Skilled in creating responsive, user-friendly web interfaces using HTML, CSS, JavaScript, and modern frameworks like React. I focus on delivering visually appealing and optimized designs for seamless user experiences.
          </div>
        </div>
        <div className=" vertical h-28 w-0.5 bg-white ml-32 mr-32">
          <div className="image w-24 relative   bottom-20 right-12 "> <img src="images/img2.png" alt="" /></div>
          <div className="title relative top-16 w-52 right-20">
            Backend Developer</div>
          <div className="disc relative top-16 text-gray-300 w-48  right-20 text-xs ">
          Experienced in building secure, scalable, and efficient server-side applications. Proficient in languages like Node.js, Python, or PHP, with expertise in databases and APIs to ensure seamless functionality.
          </div>
        </div>
        <div className=" vertical h-28 w-0.5 bg-white ml-32 mr-32">
          <div className="image w-16 relative   bottom-20 right-7 "> <img src="images/img5.png" alt="" /></div>
          <div className="title relative top-14 w-52 right-12">
            Coding Skills</div>
          <div className="disc relative top-14 text-gray-300 w-48  right-20 text-xs ">
          Familiar with Java fundamentals, including syntax, object-oriented programming concepts, loops, conditional statements, and basic exception handling. Capable of writing efficient programs
          </div>
        </div>
        <div className=" vertical h-28 w-0.5 bg-white ml-32 mr-32">
          <div className="image w-12 relative   bottom-20 right-6  "> <img src="images/img4.png" alt="" /></div>
          <div className="title relative top-14 w-52 right-20">
            Robotic Engenearing</div>
          <div className="disc relative top-14 text-gray-300 w-48  right-20 text-xs ">
          Experienced in designing and programming robotic systems using embedded systems and IoT technologies. Skilled in integrating sensors, actuators, and microcontrollers to create intelligent and connected automation solutions.
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Second
