import Button from '../Button/Button'

const CustomButtonGroupAsArrows = ({ next, previous }) => {
  return (
    <div
      style={{
        position: 'relative',
        bottom: '720px',
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

export default CustomButtonGroupAsArrows
