import TourCard from '../TourCard/TourCard'
import { CardsWrapper } from './ToursWrapper.styles'

const ToursWrapper = ({ data }) => {
  return (
    <>
      <CardsWrapper>
        {data.rockets.map((rocket, index) => {
          return <TourCard rocket={rocket} key={rocket.id} index={index} />
        })}
        {/* <TourCard /> */}
      </CardsWrapper>
    </>
  )
}

export default ToursWrapper
