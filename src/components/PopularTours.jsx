// import TourCard from './TourCard'
import ToursWrapper from './ToursWrapper'
// import arrowLeft from '../assets/buttons/arrow-left.png'
// import arrowRight from '../assets/buttons/arrow-right.png'
import { styled } from 'styled-components'
import Button from './Button'

const PopularToursContainer = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
`

const CarouselControllers = styled.div`
  /* margin: 10px; */
`

const PopularTours = () => {
  return (
    <>
      <div>
        <PopularToursContainer>
          {/* carousel title */}
          <h1>popular tours</h1>
          {/* carousel controllers */}
          <CarouselControllers>
            <Button $primary>
              {/* <img src={arrowLeft} alt='arrowLeft' /> */}
              &lt;
            </Button>
            <Button $primary>
              {/* <img src={arrowRight} alt='arrowRight' /> */}
              &gt;
            </Button>
          </CarouselControllers>
        </PopularToursContainer>
      </div>
      {/* pass an array of fetched caards and map through them */}
      <ToursWrapper />
    </>
  )
}

export default PopularTours
