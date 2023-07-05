import TourCard from '../TourCard/TourCard'
import { CardsWrapper } from './ToursWrapper.styles'

const ToursWrapper = ({ data }) => {
  return (
    <>
      <CardsWrapper>
        {data.rockets.map((rocket) => {
          return <TourCard rocket={rocket} key={rocket.id} />
        })}
        {/* <TourCard /> */}
      </CardsWrapper>
    </>
  )
}

export default ToursWrapper
