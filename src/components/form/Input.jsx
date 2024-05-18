import React, { forwardRef } from 'react'

function Input({
    label,
    type="text",
    className = "",
    ...props
}, ref){
    return (
        <div className='mb-4'>
            {
            label && <label className='text-base font-medium text-gray-600 dark:text-gray-300' htmlFor={props.id}>
                { label }
            </label>
            }
            <input type={type} className={`text-gray-600 dark:text-white flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50${className}`}  {...props} id={props.id} />
        </div>
    )
}


export default forwardRef(Input)
