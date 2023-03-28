import React from 'react'

const Products = (props) => {
    const { name, image, age } = props.allProduct;

    return (
        <div className='bg-slate-200'>
            <div className='bg-slate-100'>
                <section className='grid grid-cols-3'>
                    <img className='mr-5 rounded h-40 w-60' src={image} alt="products" />
                    <h2 className='text-xl font-semibold'>{name}</h2>
                    <p>For-age : {age}</p>
                    <p>Time : 30sec</p>
                </section>
            </div>


        </div>
    )
}

export default Products