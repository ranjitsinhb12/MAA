import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight} from '@fortawesome/free-solid-svg-icons'
import { Link} from 'react-router-dom'
import { useSelector } from "react-redux"
import { selectCurrentUser } from "../features/auth/authSlice"

const Accordion = ({items}) => {
    const [accordionOpen, setAccordionOpen] = useState(false)
    const logedInUser = useSelector(selectCurrentUser)
    const roleId = logedInUser?.RoleId

    return (
        <>
        { items.roleAllowed >= roleId &&
            <div className={`py-2 px-2 hover:bg-gray-900 `} > 
            <div onClick={()=> setAccordionOpen(!accordionOpen)}  className={`flex justify-between items-center cursor-pointer px-2 ${accordionOpen ? ' bg-gray-900' : ''}`}  >
                    
                        <span className={`hover:text-sky-300 `} >
                        { items.childrens ? 
                            <span className={`${accordionOpen ? 'text-orange-400' : ''}`} ><FontAwesomeIcon icon={faChevronRight} className={`${accordionOpen ? 'rotate-90' : ''}`} /> </span>: ''}
                            <Link to={items.path} >
                                {items.title}
                            </Link>
                        </span>
                    
                    
            </div>
            <div className={accordionOpen ? 'h-auto overflow-hidden bg-gray-900' : 'h-0 overflow-hidden'}>
                {
                    items.childrens &&
                    items.childrens.map((child, i)=>(
                        <Accordion key={i} items={child} />
                    ))
                }
            </div>
            </div>
         }
        </>
    )
}

export default Accordion
