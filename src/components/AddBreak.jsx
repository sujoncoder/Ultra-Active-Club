import React from 'react'

const AddBreak = () => {
    return (
        <section className='flex justify-around items-center bg-slate-100 rounded-md py-4'>

            <button className='h-10 w-10 rounded-full bg-white flex justify-center items-center cursor-pointer focus:text-white focus:bg-blue-500'>
                <p>10s</p>
            </button>

            <button className='h-10 w-10 rounded-full bg-white flex justify-center items-center cursor-pointer focus:text-white focus:bg-blue-500'>
                <p>20s</p>
            </button>

            <button className='h-10 w-10 rounded-full bg-white flex justify-center items-center cursor-pointer focus:text-white focus:bg-blue-500'>
                <p>30s</p>
            </button>

            <button className='h-10 w-10 rounded-full bg-white flex justify-center items-center cursor-pointer focus:text-white focus:bg-blue-500'>
                <p>40s</p>
            </button>

            <button className='h-10 w-10 rounded-full bg-white flex justify-center items-center cursor-pointer focus:text-white focus:bg-blue-500'>
                <p>50s</p>
            </button>
        </section>
    )
}

export default AddBreak