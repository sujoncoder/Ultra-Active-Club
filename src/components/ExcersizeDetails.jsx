import React from 'react'

const ExcersizeDetails = () => {

    return (
        <div>
            <h1 className='text-2xl font-semibold mb-2'>Exercize Details</h1>
            <section className='bg-slate-100 rounded-md py-4'>

                <section className='flex justify-around items-center'>
                    <div>
                        <p className='text-lg font-medium text-slate-700'>Exercise time</p>
                    </div>

                    <div>
                        <p className='text-slate-400'>200s</p>
                    </div>
                </section>

            </section>
        </div>
    )
}

export default ExcersizeDetails