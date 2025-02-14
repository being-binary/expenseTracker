import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='w-full fixed'>
            <div className='w-full h-[70px] bg-purple-400 flex flex-row justify-between items-center px-10'>
                <h1 className='text-3xl capitalize'>expense</h1>
                <ul>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
