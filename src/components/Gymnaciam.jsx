import React, { useEffect, useState } from 'react'
import Banner from './Banner'
import Products from './Products';
import Profile from './Profile';

const Gymnaciam = () => {
    const [items, setItems] = useState([]);
    const [profile, setProfile] = useState([]);

    useEffect(() => {
        fetch('/Products.JSON')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    const handlaAddButton = (item) => {
        const newData = [...profile, item]
        console.log(newData)
        setProfile(newData)
    }

    return (
        <div className='flex justify-between'>
            <section className='w-4/6'>
                <Banner />
                <div className='grid grid-cols-3 gap-2 my-4'>
                    {
                        items.map(item => <Products
                            key={item.id}
                            allProduct={item}
                            handlaAddButton={handlaAddButton}
                        ></Products>)
                    }
                </div>
            </section>

            <section className='w-[350px] ml-10'>
                <Profile Profile={Profile} />
            </section>
        </div>
    )
}

export default Gymnaciam