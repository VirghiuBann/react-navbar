import { FaBars } from 'react-icons/fa'
import logo from '../assets/react.svg'

import { links, social } from '../data'

const NavBar = () => {
  return (
    <nav>
      <div className='nav-container'>
        <div className='nav-header'>
          <img src={logo} alt='logo' />
          <button>
            <FaBars />
          </button>
        </div>
        <div className='links-container'>
          <ul>
            {links &&
              links.map(({ id, url, text }) => {
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                )
              })}
          </ul>
        </div>
        <div className='social-container'>
          <ul>
            {social &&
              social.map(({ id, url, icon }) => {
                return (
                  <li key={id}>
                    <a href={url}>{icon}</a>
                  </li>
                )
              })}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
