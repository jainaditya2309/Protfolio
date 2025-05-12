import React from 'react'

const Button = () => {
    return (
        <div className="btn flex gap-2 mt-3">
            <div className=" bg-white  rounded-md pl-0.5 pr-0.5 text-sm pt-0.5 pb-0.5  justify-center"> <a href="/Aditya Resume.pdf"> <button className=" text-sm p-3 border-solid  rounded-md bg-violet-900"> Resume</button></a></div>
            <div className=" bg-white  rounded-md pl-0.5 pr-0.5 text-sm pt-0.5 mt-1 justify-center"> <a href="https://github.com/ADITYA9456"><button className=" text-sm p-2.5 border-solid  rounded-md bg-violet-900">Visit Github</button></a></div>
        </div>
    )
}

export default Button
