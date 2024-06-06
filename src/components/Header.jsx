import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faChartSimple, faFileExport, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { Link} from 'react-router-dom'
import {Logo, Logout} from './index'
import Avatar from './Avatar'

function Header() {
    return (
    
        <aside className="flex flex-col h-screen justify-between">
            <div className=" flex flex-1 flex-col justify-items-end overflow-hidden ">
            <nav className=" space-y-6 ">
                <div>
                    <Link to="/home" className=' cursor-pointer'>
                    <Logo className=" h-24 w-24 md:h-36 md:w-36"/>
                    </Link>
                    
                </div>
                <div className="space-y-0 ">
                    <label className="px-3 text-xs font-semibold uppercase text-orange-400">
                        analytics
                    </label>
                    <Link
                
                    className="flex transform items-center px-3 py-2 text-gray-600 dark:text-gray-300 transition-colors duration-200 hover:bg-sky-300 dark:hover:text-gray-700 hover:text-gray-700"
                    >
                       <FontAwesomeIcon icon={faChartSimple} />
                    <span className="mx-2 text-sm font-medium">Dashboard</span>
                    </Link>
                    <Link
                    className="flex transform items-center px-3 py-2 text-gray-600 dark:text-gray-300 transition-colors duration-300 hover:bg-sky-300 dark:hover:text-gray-700"
                    >
                    <FontAwesomeIcon icon={faFileExport} />
                    <span className="mx-2 text-sm font-medium">Report</span>
                    </Link>
                </div>
            </nav>
            </div>
            <div className=" flex flex-1 flex-col overflow-hidden justify-end pb-4">
                <Link
                    
                    className="flex transform items-center px-3 py-2 text-gray-600 dark:text-gray-300 transition-colors duration-200 hover:bg-orange-400 dark:hover:text-gray-700 hover:text-gray-700"
                    >
                    <FontAwesomeIcon icon={faGear} />
                    <span className="mx-2 text-sm font-medium">Setting</span>
                </Link>
                <Logout />
                <br />
                <Avatar />
            </div>
        </aside>

    )
}

export default Header
