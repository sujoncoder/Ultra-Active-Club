import React from 'react'

const Hwtag = () => {
    return (
        <section className='flex justify-around py-4 items-center bg-slate-100 rounded-md'>
            <div>
                <h1 className='text-2xl font-bold'>75 <span className='text-sm text-slate-400 font-normal'>kg</span></h1>

                <h3 className='text-xl stroke-slate-200'>Weight</h3>
            </div>

            <div>
                <h1 className='text-2xl font-bold'>6.5</h1>

                <h3 className='text-xl stroke-slate-200'>Height</h3>
            </div>

            <div>
                <h1 className='text-2xl font-bold'>25 <span className='text-sm text-slate-400 font-normal'>yrs</span></h1>

                <h3 className='text-xl stroke-slate-200'>Age</h3>
            </div>
        </section>
    )
}

export default Hwtag