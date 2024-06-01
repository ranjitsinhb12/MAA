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
            <label htmlFor={props.id} className={`text-base font-medium text-gray-600 dark:text-gray-300`} id={props.id} >
                {label}
                </label>}
                <select
                {...props}
                id={props.id}
                ref={ref}
                className={`text-gray-600 dark:text-white flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
                >
                    <option className=' bg-sky-300 text-white p-8 border-2 border-red-500 cursor-pointer'>-- {label} --</option>
                    {
                        options?.map((option, i)=>(
                            <option key={i} value={option}>
                                {option}
                            </option>
                        ))
                    }
                </select>
        </div>
    )
}

export default forwardRef(Select)
