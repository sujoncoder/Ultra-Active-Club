import React from 'react'

const Products = ({ allProduct, handlaAddButton }) => {
    const { name, age, description, image, time } = allProduct;
    return (
        <div className='border rounded-md shadow p-4 hover:shadow-md w-70 bg-white'>
            <img className='w-[60%] flex justify-center' src={image} alt="" />
            <h2 className='text-xl font-semibold'>{name}</h2>
            <p className='text-slate-500'>{description.slice(0, 55)}</p>
            <p className='text-slate-700 font-medium'>Age : {age}</p>
            <p className='text-slate-700 font-medium'>Time : {time}</p>
            <div className='flex justify-center'>
                <button onClick={() => handlaAddButton(allProduct)} className='border rounded-full h-10 w-full mt-2 bg-blue-500 text-white font-md hover:shadow-md active:bg-blue-600 active:ring'>Add to list</button>
            </div>
        </div>
    )
}

export default Products