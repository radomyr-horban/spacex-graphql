import { styled } from 'styled-components'

interface ButtonProps {
  primary?: boolean
  fontSize?: string
  padding?: string
  margin?: string
  fontWeight?: string
  width?: string
}

const StyledButton = styled.button<ButtonProps>`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  width: ${(props) => props.width};

  background-color: ${(props) =>
    props.primary
      ? props.theme.colors.button.primary
      : props.theme.colors.button.secondary};

  text-transform: uppercase;
  height: 53px;
  border: none;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
  &:active {
    background-color: ${(props) => props.theme.colors.button.favourite};
    color: ${(props) => props.theme.colors.button.primary};
  }
`

export default StyledButton
