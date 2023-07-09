import StyledButton from './Button'

import ArrowLeft from '../assets/buttons/arrow-left.png'
import ArrowRight from '../assets/buttons/arrow-right.png'

import { StyledArrowsContainer } from './styles/CustomArrows.styled'

const CustomButtonGroupAsArrows = ({ next, previous }) => {
  return (
    <StyledArrowsContainer>
      <StyledButton onClick={previous} primary margin={'0 10px'}>
        <img src={ArrowLeft} alt='ArrowLeft' />
      </StyledButton>
      <StyledButton onClick={next} primary>
        <img src={ArrowRight} alt='ArrowRight' />
      </StyledButton>
    </StyledArrowsContainer>
  )
}

export default CustomButtonGroupAsArrows
