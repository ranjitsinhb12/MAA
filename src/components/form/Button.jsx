import React from 'react'

function Button({
    children,
    type='submit',
    className='',
    ...props
}) {
    return (
        <button type={type} className={`nline-flex w-full items-center justify-center rounded-md bg-sky-300 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-orange-400`}  {...props}>
            {children}
        </button>
    )
}

export default Button
