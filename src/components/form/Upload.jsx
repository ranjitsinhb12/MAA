import React from 'react'

function Upload({
    label,
    id,
    className="",
    type="file"

},ref) {
    return (
        <div>
            <label htmlFor={id} className="text-base font-medium text-gray-600 dark:text-gray-300">
                {label}
            </label>
            <div className="mt-2">
                <input
                ref={ref}
                className=" text-gray-600 dark:text-white flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type={type}
                id={id}
                />
            </div>
        </div>
    )
}

export default React.forwardRef(Upload)
