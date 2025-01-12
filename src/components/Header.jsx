import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faChartSimple, faFileExport, faRightFromBracket, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { Link} from 'react-router-dom'
import {Logo, Logout, Accordion, LocationToSelect, AllCompany} from './index'
import Avatar from './Avatar'
import MENU from '../menu.json'
import { useState } from 'react'

function Header() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
    return (
        <>
        <button className="menu-toggle lg:hidden p-4 text-right text-4xl" onClick={toggleMenu}>
                ☰
        </button>
       
        <aside  className={`flex flex-col justify-between px-4 text-gray-600 dark:text-white
        lg:relative lg:transform lg:-translate-x-[0px]  ${isOpen ? ' p-4 top-0 absolute z-1 w-11/12 h-full bg-white dark:bg-gray-700 transition-transform duration-300 ease-linear' : 'top-0 h-full absolute transform -translate-x-[300px] duration-300 ease-linear '}`}>  
           
            <div>
                <div onClick={toggleMenu} className=' text-right lg:hidden'>
                    <FontAwesomeIcon icon={faCircleXmark} className='ml-2 text-4xl' />
                </div>
                <div>
                    <AllCompany />
                </div>
                <div>
                    <LocationToSelect /> 
                </div>
                <div className=" flex flex-col justify-items-end overflow-auto">
                
                    {
                    MENU.map((items, index) => (
                    <Accordion key={index} items={items}  />
                    ))
                    }
                </div>
            </div>
            <div className=" py-4">
                <Avatar />
            </div>
        </aside>
        </>
    )
}

export default Header
