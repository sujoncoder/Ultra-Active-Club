import React from 'react'
import logo from '/durbel.png'


const Banner = () => {
    return (
        <div>
            <section className='flex items-center space-x-3'>
                <img src={logo} alt="logo durbel" />
                <h1 className='text-3xl font-semibold
             text-blue-400'>Ultra-Active-Club</h1>
            </section>

            <h2 className='text-2xl text-slate-500 mt-4'>Age Select today’s exercise</h2>
        </div>
    )
}

export default Banner