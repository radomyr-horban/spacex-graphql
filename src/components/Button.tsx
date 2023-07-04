import { styled } from 'styled-components'

interface ButtonProps {
  $primary: boolean
}

const Button = styled.button<ButtonProps>`
  border: none;
  background-color: ${(props) =>
    props.$primary ? props.theme.button.primary : props.theme.button.secondary};
  height: 53px;
  padding: 0 30px;
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`

export default Button
