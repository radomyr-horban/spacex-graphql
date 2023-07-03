import { Link } from 'react-router-dom'

import logo from '../assets/logo.png'
import favouriteIcon from '../assets/favourite-icon.svg'

import Button from './Button'

const NavBar = () => {
  return (
    <div className='nav-bar'>
      <ul>
        <li>
          <Link to='/'>
            <img src={logo} alt='logo' />
          </Link>
        </li>
        <li>
          <Link to='/'>home</Link>
        </li>
        <li>
          <Link to=''>tours</Link>
        </li>
        <li>
          <Link to=''>about</Link>
        </li>
        <li>
          <Link to=''>help</Link>
        </li>
        <li>
          <Link to='/favourites'>
            <img src={favouriteIcon} alt='favouriteIcon' />
          </Link>
        </li>
        <li>
          <Link to=''>
            <Button>sign in</Button>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
