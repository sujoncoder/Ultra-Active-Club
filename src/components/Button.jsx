import React from 'react'
import Swal from 'sweetalert2'

const Button = () => {
    const completeActivity = () => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your Activity Complete',
            showConfirmButton: false,
            timer: 1500
        })
    }
    return (
        <div onClick={completeActivity} className='h-10 w-full rounded-md bg-blue-600 shadow text-center text-white flex justify-center items-center cursor-pointer active:bg-blue-700'>
            <p className='font-medium'>Activity Complete</p>
        </div>
    )
}

export default Button