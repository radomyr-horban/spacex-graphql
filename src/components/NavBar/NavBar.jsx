import logo from '../../assets/logo.png'
import favouriteIcon from '../../assets/buttons/favourite-icon.svg'
import favouriteIconActive from '../../assets/buttons/favourite-icon-active.svg'

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

const NavBar = ({ currentPage }) => {
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
              <FavouriteIcon
                src={
                  currentPage === 'home' ? favouriteIcon : favouriteIconActive
                }
                alt='favouriteIcon'
              />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to=''>
              <Button
                $fontSize={'20px'}
                $padding={'0 50px'}
                $fontWeight={'bold'}
              >
                Sign In
              </Button>
            </NavLink>
          </NavItem>
        </ActionsGroup>
      </NavList>
    </NavBarContainer>
  )
}

export default NavBar
