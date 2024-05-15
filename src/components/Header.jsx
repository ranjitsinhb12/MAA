

function Header() {
    return (
    
        <aside className="flex flex-col overflow-y-hidden overflow-x-hidden ">
            <div className=" flex flex-1 flex-col justify-between">
                <div>
                <img className=" h-36 w-36" src="../../public/maa_Logo.png" alt="Logo"/>
            </div>

            <nav className=" space-y-6 ">
                <div className="space-y-0 ">
                    <label className="px-3 text-xs font-semibold uppercase text-org">
                        analytics
                    </label>
                    <a
                    className="flex transform items-center px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                    >
                       <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5"
                            aria-hidden="true"
                        >
                            <line x1="12" y1="20" x2="12" y2="10"></line>
                            <line x1="18" y1="20" x2="18" y2="4"></line>
                            <line x1="6" y1="20" x2="6" y2="16"></line>
                        </svg>
                    <span className="mx-2 text-sm font-medium">Dashboard</span>
                    </a>
                    <a
                    className="flex transform items-center px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                    href="#"
                    >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                    aria-hidden="true"
                >
                    <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08"></path>
                    <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z"></path>
                </svg>
                    <span className="mx-2 text-sm font-medium">Sales</span>
                    </a>
                </div>
            </nav>
            </div>
        </aside>

    )
}

export default Header
