import StyledButton from './styles/Button.styled'

import ArrowLeft from '../assets/buttons/arrow-left.png'
import ArrowRight from '../assets/buttons/arrow-right.png'

import { StyledArrowsContainer } from './styles/CustomArrows.styled'

// type CustomButtonGroupAsArrowsProps = {
//   next: () => void
//   previous: () => void
// }

const CustomButtonGroupAsArrows = ({
  next,
  previous,
  // }: CustomButtonGroupAsArrowsProps) => {
}) => {
  return (
    // <StyledArrowsContainer>
    <div style={{ position: 'relative', bottom: '850px', textAlign: 'right' }}>
      <StyledButton onClick={previous} primary margin={'0 10px'}>
        <img src={ArrowLeft} alt='ArrowLeft' />
      </StyledButton>
      <StyledButton onClick={next} primary>
        <img src={ArrowRight} alt='ArrowRight' />
      </StyledButton>
      {/* </StyledArrowsContainer> */}
    </div>
  )
}

export default CustomButtonGroupAsArrows
