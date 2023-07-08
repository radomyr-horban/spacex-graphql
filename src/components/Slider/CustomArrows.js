import Button from '../Button/Button'

const CustomLeftArrow = ({ onClick }) => {
  return <i className='custom-left-arrow' onClick={() => onClick()} />
}
const CustomRightArrow = ({ onClick }) => {
  return <i className='custom-right-arrow' onClick={() => onClick()} />
}

const CustomButtonGroup = ({ next, previous, goToSlide, carouselState }) => {
  const { totalItems, currentSlide } = carouselState
  return (
    <div className='custom-button-group'>
      {/* <div>Current slide is {currentSlide}</div>
      <button onClick={() => previous()}>Previous slide</button>
      <button onClick={() => next()}>Next slide</button> */}
    </div>
  )
}
const CustomButtonGroupAsArrows = ({ next, previous }) => {
  return (
    <div
      style={{
        position: 'relative',
        bottom: '700px',
        textAlign: 'right',
      }}
    >
      <Button
        onClick={previous}
        $primary
        $fontSize='30px'
        $padding={'0 20px'}
        $margin={'0 10px'}
      >
        &lt;
      </Button>
      <Button onClick={next} $primary $fontSize='30px' $padding={'0 20px'}>
        &gt;
      </Button>
    </div>
  )
}

export {
  CustomLeftArrow,
  CustomRightArrow,
  CustomButtonGroup,
  CustomButtonGroupAsArrows,
}
