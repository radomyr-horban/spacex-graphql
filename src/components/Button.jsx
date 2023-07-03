import { styled } from 'styled-components'

const Button = styled.button`
  border: none;
  background-color: #d3eaff; //! color should be a global variable
  height: 53px;
  padding: 0 30px;

  /* move to a global class */
  text-transform: uppercase;

  /* body */
  /* font-family: 'Syne', sans-serif; */

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`

export default Button
