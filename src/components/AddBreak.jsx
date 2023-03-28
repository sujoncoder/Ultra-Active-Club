import React from 'react'

const AddBreak = () => {
    return (
        <section className='flex justify-around items-center bg-slate-100 rounded-md py-4'>

            <div className='h-10 w-10 rounded-full bg-white flex justify-center items-center cursor-pointer'>
                <p>10s</p>
            </div>

            <div className='h-10 w-10 rounded-full bg-white flex justify-center items-center cursor-pointer'>
                <p>20s</p>
            </div>

            <div className='h-10 w-10 rounded-full bg-white flex justify-center items-center cursor-pointer'>
                <p>30s</p>
            </div>

            <div className='h-10 w-10 rounded-full bg-white flex justify-center items-center cursor-pointer'>
                <p>40s</p>
            </div>

            <div className='h-10 w-10 rounded-full bg-white flex justify-center items-center cursor-pointer'>
                <p>50s</p>
            </div>
        </section>
    )
}

export default AddBreak