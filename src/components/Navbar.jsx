import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

function Navbar({ title }) {
    return (
        <nav className='navbar mb-12 shadow-lg bg-pink-500 text-white'>
            <div className='container mx-auto'>
                <div className='flex-row px-2 mx-2'>
                    <FaGithub className='inline pr-2 text-3xl' />
                    <Link to='/' className='text-lg font-bold align-middle'>  {title}
                    </Link>
                </div>

                <div className='flex-1 px-2 mx-2'>
                    <div className='flex justify-end'>
                        <Link to='/' className='btn btn-ghost btn-sm roubded-btn'>HOME</Link>
                        <Link to='/about' className='btn btn-ghost btn-sm roubded-btn'>ABOUT</Link>

                    </div>
                </div>
            </div>
        </nav>
    )
}
Navbar.defaultProps = {
    title: 'Github User App'
}

Navbar.propTypes = {
    title: PropTypes.string,
}
export default Navbar