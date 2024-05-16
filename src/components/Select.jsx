import React, {forwardRef} from 'react'

function Select({
    options,
    label,
    className="",
    ...props
}, ref) {
    return (
        <div className='mb-4'>
            { label && 
            <label htmlFor={props.id} className={`${className}`} id={props.id} >
                {label}
                </label>}
                <select
                {...props}
                id={props.id}
                ref={ref}
                className={`${className}`}
                >
                {
                    options?.map((option)=>(
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))
                }
                </select>
        </div>
    )
}

export default forwardRef(Select)
