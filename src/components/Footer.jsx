import React from 'react'
import { Link } from 'react-router-dom'
import { TbError404 } from 'react-icons/tb'

function Footer() {
    const aYear = new Date().getFullYear()
    return (
        <footer className='footer p-5 bg-pink-500 font-bold text-white footer-center' id='footer'>
            <div>
                <p>
                    &copy; {aYear}  All right Reserved.
                </p>
                <Link to={'/homee'}>
                    <p className='flex gap-1 items-center'><TbError404/> Error Page</p>
                </Link>
              
            </div>
        </footer>
    )
}

export default Footer