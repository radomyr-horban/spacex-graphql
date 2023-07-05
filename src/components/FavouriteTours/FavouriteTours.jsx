import ToursWrapper from '../ToursWrapper/ToursWrapper'
import {
  FavouriteToursContainer,
  FavouriteToursHeader,
} from './FavouriteTours.styles'

const FavouriteTours = () => {
  // TODO: Replace this data with `LocalStorage`
  const fakeData = {
    rockets: [
      { id: 1, name: 'Rocket 1', description: 'fake description 1' },
      { id: 2, name: 'Rocket 2', description: 'fake description 2' },
      { id: 3, name: 'Rocket 3', description: 'fake description 3' },
      { id: 4, name: 'Rocket 4', description: 'fake description 4' },
    ],
  }

  return (
    <FavouriteToursContainer>
      <FavouriteToursHeader>
        <h2>Clear all</h2>
      </FavouriteToursHeader>
      <ToursWrapper data={fakeData} />
    </FavouriteToursContainer>
  )
}

export default FavouriteTours
