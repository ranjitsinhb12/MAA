import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faChartSimple, faFileExport, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { Link} from 'react-router-dom'
import {Logo, Logout, Accordion} from './index'
import Avatar from './Avatar'
import MENU from '../menu.json'

function Header() {


    return (
    
        <aside className="flex flex-col h-screen justify-between shrink-0  ">
            <div className='flex  items-center justify-center'>
                <Link to="/home" className=' cursor-pointer'>
                <Logo className=" h-24 w-24 md:h-36 md:w-36"/>
                </Link>    
            </div>
            <div className=" flex flex-1 flex-col justify-items-end overflow-auto">
            
                {
                MENU.map((items, index) => (
                  <Accordion key={index} items={items}  />
                ))
                }
            </div>
            <div className=" flex  flex-col overflow-hidden   py-4">
                <Avatar />
            </div>
        </aside>

    )
}

export default Header
