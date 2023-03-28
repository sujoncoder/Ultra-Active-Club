import React from 'react'
import ProfilePic from '../assets/images/profile.png'
import { GoLocation } from 'react-icons/go'
import Hwtag from './Hwtag'
import AddBreak from './AddBreak'
import ExcersizeDetails from './ExcersizeDetails'
import BreakTime from './BreakTime'
import Button from './Button'

const Profile = () => {

    return (
        <div className='bg-white px-6 w-full py-4 rounded'>
            <section className='flex items-center space-x-2'>
                <img className='w-14 h-14 rounded-full border-cyan-500 border-4 hover:grayscale cursor-pointer duration-300' src={ProfilePic} alt="" />

                <div>
                    <h1 className='text-xl font-bold'>Sujon Sheikh</h1>
                    <div className='flex justify-center items-center space-x-1'>
                        <GoLocation className='text-slate-400' />
                        <p className=' text-slate-400'>Magura,Bangladesh.</p>
                    </div>
                </div>
            </section>
            <br />

            <section>
                <Hwtag />
            </section><br />

            <h1 className='text-xl font-semibold mb-2'>Add A Break.</h1>

            <section>
                <AddBreak />
            </section><br />

            <section>
                <ExcersizeDetails Profile={Profile} />
            </section>

            <section>
                <BreakTime />
            </section><br /><br />

            <section>
                <Button />
            </section>
        </div>
    )
}

export default Profile