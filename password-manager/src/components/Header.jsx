import React from 'react'
import { FaShieldAlt, FaGithub } from "react-icons/fa";

const Header = () => {
    return (
        <div>
            <nav className=' bg-gradient-to-r from-[#fde68a]  to-[#f59e0b] h-[8vh]'>
                <ul className='flex items-center justify-between p-3 mr-4 ml-4'>
                    <li className='text-xl'><FaShieldAlt /></li>
                    <li className='text-3xl'>LockBox</li>
                    <li className='cursor-pointer hover:scale-110 transition-all ease-in'>
                        <a className='flex gap-2 justify-center items-center border rounded-4xl p-1 invert' href='https://github.com/Satyam4123' target='_blank'>
                            <div><FaGithub /></div>
                            <div>Github</div>
                        </a>
                    </li>
                </ul>
            </nav>
            <p className='text-center text-white text-sm h-[4vh] p-1 bg-gradient-to-r from-[#0f172a]  to-[#334155]'>
                Zero cloud. Zero leaks. 100% yours.
            </p>
        </div>
    )
}

export default Header
