import logo from '../assets/logo.png'
// import logoSvg from '../assets/logo-svg.svg'

import favouriteIcon from '../assets/buttons/favourite-icon.svg'
import favouriteIconActive from '../assets/buttons/favourite-icon-active.svg'

import StyledButton from './Button'
import {
  ActionsGroup,
  LinkGroup,
  NavBarContainer,
  NavItem,
  NavLink,
  NavList,
} from './styles/NavBar.styled'

const NavBar = ({ currentPage }) => {
  return (
    <NavBarContainer>
      <NavList>
        <NavItem>
          <NavLink to='/'>
            <img src={logo} alt='logo' />
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
              <img
                src={
                  currentPage === 'home' ? favouriteIcon : favouriteIconActive
                }
                alt='favouriteIcon'
              />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to=''>
              <StyledButton
                fontSize={'20px'}
                padding={'0 50px'}
                $fontWeight={'bold'}
              >
                Sign In
              </StyledButton>
            </NavLink>
          </NavItem>
        </ActionsGroup>
      </NavList>
    </NavBarContainer>
  )
}

export default NavBar
