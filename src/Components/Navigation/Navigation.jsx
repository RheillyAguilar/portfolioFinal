
import { useEffect, useState } from 'react'
import Logo from '../../assets/ellie-logo.png'
import Resume from '../../assets/RheillyAguilar.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faTimes, faBars } from '@fortawesome/free-solid-svg-icons'

export default function Navigation() {


    
const [isOpen, setIsOpen] = useState(false);
const [sticky, setSticky] = useState(false);


// MAKE NAVIGATION STICKY
const stickyNavigation = () => {
    if(window.scrollY >= 10) {
        setSticky(true);
    } else {
        setSticky(false);
    }
}

// TO KNOW IF THE SCREEN IS SCROLL
useEffect(() => { 
    window.addEventListener('scroll', stickyNavigation)
    return () => window.removeEventListener('scroll', stickyNavigation) 
}, [])


  return (
    <nav className={
        sticky ? 'sticky nav' : 'flex justify-around items-center gap-10 p-5'
    }>

        <div>
            <img src={Logo} alt="" className='w-[50%]'/>
        </div>
            <div className={isOpen ? 'nav-link active' : 'nav-link'}>
                <ul className='flex items-center gap-10 text-2xl font-bold text-[#5e5946] cursor-pointer'>
                    <li>Home</li>
                    <li>About Me</li>
                    <li>Skills</li>
                    <li>Project</li>
                </ul>
            </div>

            <div className='flex items-center gap-7'>
                <a  href={Resume} 
                    download='RheillyAguilar'
                    className='bg-[#ae887b] rounded-md w-[146px] h-10 text-white flex items-center justify-center gap-2 text-xl'>
                    <FontAwesomeIcon icon={faDownload} />
                    Resume
                </a>
                <div className='bars' onClick={() => setIsOpen(!isOpen)}>
                    {
                        isOpen ? <FontAwesomeIcon icon={faTimes} /> :
                        <FontAwesomeIcon icon={faBars} />
                    }
                </div>
            </div>

    </nav>
  )
}
