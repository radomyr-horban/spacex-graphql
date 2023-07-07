import { useQuery, gql } from '@apollo/client'

import Button from '../Button/Button'
import ToursWrapper from '../ToursWrapper/ToursWrapper'
import sliderDots from '../../assets/img/slider-dots.png'

import {
  PopularToursContainer,
  PopularToursHeader,
  SliderDots,
} from './PopularTours.styles'

const GET_SPACEX_DATA = gql`
  {
    rockets {
      id
      description
      name
    }
  }
`
const PopularTours = ({ refScroll }) => {
  const { loading, error, data } = useQuery(GET_SPACEX_DATA)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>

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

      <ToursWrapper data={data.rockets} />

      <SliderDots src={sliderDots} alt='slider dots' />
    </PopularToursContainer>
  )
}

export default PopularTours
