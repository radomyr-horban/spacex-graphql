import { styled } from 'styled-components'

interface ButtonProps {
  $primary: boolean
  $fontSize: string
  $padding?: string
  $margin?: string
}

const Button = styled.button<ButtonProps>`
  font-size: ${(props) => props.$fontSize};

  background-color: ${(props) =>
    props.$primary ? props.theme.button.primary : props.theme.button.secondary};

  margin: ${(props) => props.$margin};
  padding: ${(props) => props.$padding};

  height: 53px;
  border: none;
  /* padding: 0 20px; */

  text-transform: uppercase;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`

export default Button
