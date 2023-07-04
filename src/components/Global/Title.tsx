import { styled } from 'styled-components'

interface TitleProps {
  color: string
  fontSize: number
}

const Title = styled.title<TitleProps>`
  text-transform: uppercase;
`

export default Title
