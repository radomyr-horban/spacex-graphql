import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const NavBarContainer = styled.div`
  position: absolute;
  width: 100%;
  z-index: 1;

  background-color: #1e1e1eb2; //! Use a global color
  /* background-color: #1e1e1e;
  opacity: 0.7; */
`

export const NavList = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: space-around;
  align-items: center;
`

export const LogoImage = styled.img`
  /* height: 40px; */
`

export const LinkGroup = styled.nav`
  display: flex;
`
export const ActionsGroup = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: right;
`

export const NavItem = styled.li`
  margin-right: 10px;
  text-transform: uppercase;
`

export const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: bold;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

export const FavouriteIcon = styled.img`
  /* height: 20px; */
`
