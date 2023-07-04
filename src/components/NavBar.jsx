import { Link } from 'react-router-dom'
import styled from 'styled-components'

import logo from '../assets/logo.png'
import favouriteIcon from '../assets/buttons/favourite-icon.svg'

import Button from './Button'

const NavBarContainer = styled.div`
  position: absolute;
  width: 100%;
  z-index: 1;

  background-color: #1e1e1eb2; //! Use a global color
  /* background-color: #1e1e1e;
  opacity: 0.7; */
`

const NavList = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: space-around;
  align-items: center;
`

const LogoImage = styled.img`
  /* height: 40px; */
`

const LinkGroup = styled.nav`
  display: flex;
  /* list-style-type: none; */
  /* justify-content: center; */
`
const ActionsGroup = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: right;
`

const NavItem = styled.li`
  margin-right: 10px;
  text-transform: uppercase;
`

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: bold;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

const FavouriteIcon = styled.img`
  /* height: 20px; */
`

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
