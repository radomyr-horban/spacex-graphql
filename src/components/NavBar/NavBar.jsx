import logo from '../../assets/logo.png'
import favouriteIcon from '../../assets/buttons/favourite-icon.svg'

import Button from '../Button/Button'
import {
  ActionsGroup,
  FavouriteIcon,
  LinkGroup,
  LogoImage,
  NavBarContainer,
  NavItem,
  NavLink,
  NavList,
} from './NavBar.styles'

const NavBar = () => {
  return (
    <NavBarContainer>
      <NavList>
        <NavItem>
          <NavLink to='/'>
            <LogoImage src={logo} alt='logo' />
          </NavLink>
        </NavItem>

        <LinkGroup>
          <NavItem>
            <NavLink to='/'>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to=''>Tours</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to=''>About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to=''>Help</NavLink>
          </NavItem>
        </LinkGroup>

        <ActionsGroup>
          <NavItem>
            <NavLink to='/favourites'>
              <FavouriteIcon src={favouriteIcon} alt='favouriteIcon' />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to=''>
              <Button>Sign In</Button>
            </NavLink>
          </NavItem>
        </ActionsGroup>
      </NavList>
    </NavBarContainer>
  )
}

export default NavBar
