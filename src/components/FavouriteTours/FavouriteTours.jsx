import ToursWrapper from '../ToursWrapper/ToursWrapper'
import {
  FavouriteToursContainer,
  FavouriteToursHeader,
} from './FavouriteTours.styles'

const FavouriteTours = () => {
  return (
    <FavouriteToursContainer>
      <FavouriteToursHeader>
        <h2>Clear all</h2>
      </FavouriteToursHeader>
      <ToursWrapper />
    </FavouriteToursContainer>
  )
}

export default FavouriteTours
