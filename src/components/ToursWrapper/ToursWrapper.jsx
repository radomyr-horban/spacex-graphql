import TourCard from '../TourCard/TourCard'
import { CardsWrapper } from './ToursWrapper.styles'

const ToursWrapper = ({ data }) => {
  return (
    <>
      <CardsWrapper>
        {data.map((rocket, index) => {
          return (
            <TourCard
              key={rocket.id}
              rocket={rocket}
              index={index}
              // setFavouriteTours={setFavouriteTours}
            />
          )
        })}
      </CardsWrapper>
    </>
  )
}

export default ToursWrapper
