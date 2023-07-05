import TourCard from '../TourCard/TourCard'
import { CardsWrapper } from './ToursWrapper.styles'

const ToursWrapper = () => {
  return (
    <>
      <CardsWrapper>
        <TourCard />
        <TourCard />
        <TourCard />
      </CardsWrapper>
    </>
  )
}

export default ToursWrapper
