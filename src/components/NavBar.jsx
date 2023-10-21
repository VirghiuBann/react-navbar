import { FaBars } from 'react-icons/fa'
import logo from '../assets/react.svg'

import { links, social } from '../data'
import { useRef, useState } from 'react'
import Links from './Links'
import Social from './Socials'

const NavBar = () => {
  const [showLinks, setShowLinks] = useState(false)
  const linksRef = useRef(null)

  const toggleNav = () => {
    setShowLinks(!showLinks)
  }

  const linksStyle = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : '0px',
  }
  return (
    <nav>
      <div className='nav-container'>
        <div className='nav-header'>
          <img src={logo} alt='logo' />
          <button className='btn-toggle' onClick={toggleNav}>
            <FaBars />
          </button>
        </div>
        <div className='links-container' style={linksStyle}>
          <ul className='links' ref={linksRef}>
            {links &&
              links.map((link) => {
                return <Links key={link.id} {...link} />
              })}
          </ul>
        </div>
        <div className='social-container'>
          <ul>{social && <Social social={social} />}</ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
