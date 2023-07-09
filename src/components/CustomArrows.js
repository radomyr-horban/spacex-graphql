import StyledButton from './Button'

import ArrowLeft from '../assets/buttons/arrow-left.png'
import ArrowRight from '../assets/buttons/arrow-right.png'

const CustomButtonGroupAsArrows = ({ next, previous }) => {
  return (
    <div
      style={{
        position: 'relative',
        bottom: '850px',
        textAlign: 'right',
      }}
    >
      <StyledButton onClick={previous} primary margin={'0 10px'}>
        <img src={ArrowLeft} alt='ArrowLeft' />
      </StyledButton>
      <StyledButton onClick={next} primary>
        <img src={ArrowRight} alt='ArrowRight' />
      </StyledButton>
    </div>
  )
}

export default CustomButtonGroupAsArrows
