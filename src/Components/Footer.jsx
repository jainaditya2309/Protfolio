import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
    return (<footer className="bg-blue-950">
        <div className="  ml-96  mt-96">
            <div className="  ml-96 text-xl"> Aditya's Portfolio.</div>
            <div className="icon text-xl flex gap-10 mt-4 ml-96 cursor-pointer"> 
                <a href="https://wa.me/+919456266491"><FaWhatsapp /></a>
                <a href="https://www.linkedin.com/in/aditya-jain-3211a8257?fbclid=PAZXh0bgNhZW0CMTEAAaZW6FPpL0ywd29KNr3zg881LESEULDjeenFrJvzmhNrklMMcp8TIkLREkM_aem_Abr4n5DFQxAIW0YJMJZpNKLvnw_lMxpF_SQgmiSM-_W_6SONffmQfvfJL1Ql3EkfCiesuRwK9l1JyZ2yb_BVOVk5"><CiLinkedin /> </a> 
                <a href="https://github.com/ADITYA9456"><FaGithub /></a></div>
            <div className="link flex ml-64 mt-2 ">
                <ul className="flex gap-9 text-gray-300">
                    <li className="cursor-pointer ">Home</li>
                    <li className="cursor-pointer ">About</li>
                    <li className="cursor-pointer ">Terms & Condition</li>
                    <li className="cursor-pointer ">Support</li>
                </ul>
            </div>
            <div className="ml-80 text-gray-500 flex mt-1 gap-1 cursor-default "> &copy;<span className="mb-1 ">Copyright Aditya | All right Reserve</span></div>
        </div>
    </footer>
    )
}

export default Footer
