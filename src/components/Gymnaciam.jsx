import React, { useEffect, useState } from 'react'
import Profile from './Profile'
import logo from '/durbel.png'
import Products from './Products'

const Gymnaciam = () => {
    const [itams, setItems] = useState([]);
    useEffect(() => {
        fetch('/Products.JSON')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div className='flex justify-between'>
            <section>
                <div className='flex space-x-4 items-center'>
                    <img src={logo} alt="" />
                    <h1 className='font-bold uppercase text-blue-500
                    text-2xl'>Ultra-active-club</h1>
                </div><br />
                <h2 className='text-slate-500 text-2xl font-semibold'>Select today’s exercise</h2>

                {
                    itams.map(item => <Products
                        key={item.id}
                        allProduct={item}
                    ></Products>)
                }
            </section>

            <section>
                <Profile></Profile>
            </section>
        </div>
    )
}

export default Gymnaciam