import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faChartSimple, faFileExport, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

function Header() {
    return (
    
        <aside className="flex flex-col overflow-y-hidden overflow-x-hidden justify-between ">
            <div className=" flex flex-1 flex-col justify-items-end">
            <nav className=" space-y-6 ">
                <div>
                    <img className=" h-36 w-36 dark:hidden" src="/maa_logo_light.png" alt="Logo"/>
                    <img className=" h-36 w-36 dark:block hidden" src="/maa_logo_dark.png" alt="Logo"/>
                </div>
                <div className="space-y-0 ">
                    <label className="px-3 text-xs font-semibold uppercase text-orange-400">
                        analytics
                    </label>
                    <a
                    href="#"
                    className="flex transform items-center px-3 py-2 text-gray-600 dark:text-gray-300 transition-colors duration-200 hover:bg-sky-300 dark:hover:text-gray-700 hover:text-gray-700"
                    >
                       <FontAwesomeIcon icon={faChartSimple} />
                    <span className="mx-2 text-sm font-medium">Dashboard</span>
                    </a>
                    <a
                    className="flex transform items-center px-3 py-2 text-gray-600 dark:text-gray-300 transition-colors duration-300 hover:bg-sky-300 dark:hover:text-gray-700"
                    href="#"
                    >
                    <FontAwesomeIcon icon={faFileExport} />
                    <span className="mx-2 text-sm font-medium">Sales</span>
                    </a>
                </div>
            </nav>
            <div className=" absolute left-4 bottom-8 flex flex-wrap">
                <div className='flex flex-col space-y-0'> 
                <a
                    href="#"
                    className="flex transform items-center px-3 py-2 text-gray-600 dark:text-gray-300 transition-colors duration-200 hover:bg-orange-400  hover:text-white"
                    >
                       <FontAwesomeIcon icon={faGear} />
                    <span className="mx-2 text-sm font-medium">Setting</span>
                </a>
                <a
                    href="#"
                    className="flex transform items-center px-3 py-2 text-gray-600 dark:text-gray-300 transition-colors duration-200 hover:bg-orange-400 hover:white"
                    >
                       <FontAwesomeIcon icon={faRightFromBracket} />
                    <span className="mx-2 text-sm font-medium">Logout</span>
                </a>
                </div>
                
            </div>
            </div>
            
        </aside>

    )
}

export default Header
