import React from 'react'

function Checkbox({
    label,
    type="checkbox",
    id,
    name,
    value,
    className="",
    ...props
},ref) {
    return (
        <div className="pl-4 pb-1">           
            <input type={type} id={id} name={name} value={value} {...props}  className=' accent-sky-300' />      
            <label htmlFor={id} className='ml-2 text-gray-600 dark:text-gray-300'>{label}</label>
        </div>
    )
}

export default React.forwardRef(Checkbox)
