import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const NavBarContainer = styled.div`
  position: absolute;
  width: 100%;
  z-index: 1;

  background-color: #1e1e1eb2; //! Use a global color
 
`

export const NavList = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: space-around;
  align-items: center;

 
`

export const LinkGroup = styled.nav`
  display: flex;
  font-size: 16px;
  font-family: 'Lato', sans-serif;

  @media (max-width: 1200px) {
    flex-direction: column;
    margin: 20px auto;
  }
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
