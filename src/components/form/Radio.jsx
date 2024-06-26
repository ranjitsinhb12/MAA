import React, {forwardRef} from 'react'

function Radio({
    label,
    id,
    name,
    className="",
    ...props
    
}, ref) {
    return (
        <div>
            <div className=" pl-4  pb-1">
                <input type="radio" ref={ref} id={id} name={name} value={props.value} className=' accent-sky-300' />
                <label htmlFor={id} className='text-gray-600 dark:text-gray-300'>{" "}{label}</label>
            </div>
        </div>
    )
}

export default forwardRef(Radio)