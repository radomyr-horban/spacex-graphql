import Button from '../Button/Button'
import ToursWrapper from '../ToursWrapper/ToursWrapper'
import sliderDots from '../../assets/img/slider-dots.png'
import {
  PopularToursContainer,
  PopularToursHeader,
  SliderDots,
} from './PopularTours.styles'

const PopularTours = ({ refScroll }) => {
  return (
    <PopularToursContainer>
      <PopularToursHeader>
        <h1 ref={refScroll}>popular tours</h1>
        <div>
          <Button
            $primary
            $fontSize='30px'
            $padding={'0 20px'}
            $margin={'0 10px'}
          >
            &lt;
          </Button>
          <Button $primary $fontSize='30px' $padding={'0 20px'}>
            &gt;
          </Button>
        </div>
      </PopularToursHeader>

      <ToursWrapper />

      <SliderDots src={sliderDots} alt='slider dots' />
    </PopularToursContainer>
  )
}

export default PopularTours
