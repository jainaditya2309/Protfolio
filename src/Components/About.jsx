import React from 'react'

const About = () => {
    return (
        <div className="flex about">
            <div className="m-10">
                <h1 className="text-4xl mx-60 mt-0">About Me </h1>
                <div className="first mx-28 text-base mt-4">Hello! Aditya Jain here. A technology fanatic!
                Currently, I am enrolled in the Department of Electronics and comunication Engineering at Lakshmi Narain College of Technology , BHOPAL (M.P) My early education was completed from Young Scholars' Academy Shikohabad (U.P).
                </div>
                <div className="first mx-28 text-base mt-4"> I am a passionate and driven developer with expertise in both front-end and back-end technologies. My journey in the world of technology has allowed me to gain proficiency in HTML, CSS, JavaScript, Java, and frameworks like Node.js, React, and Tailwind CSS.
                </div>
                <div className="second mx-28 text-base mt-4">
                    I also have hands-on experience in database management using MongoDB, enabling me to create scalable and efficient web applications. Beyond software development, I specialize in Embedded Systems and IoT, showcasing my versatility in blending software with hardware to create innovative solutions.
                </div>
                <div className="third mx-28 text-base mt-4">
                    As someone deeply committed to continuous learning and problem-solving, I thrive on tackling challenges and bringing creative ideas to life. Feel free to explore my work and reach out—I’d love to collaborate on exciting project</div>
            </div>
            <div className="right size-1/2 ml-20 mr-20 mt-20 mb-20 "> <img className="rounded-full " src="images/img6.jpg" alt="" /></div>
        </div>
    )
}

export default About
