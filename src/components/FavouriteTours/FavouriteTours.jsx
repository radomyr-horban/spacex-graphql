import { useRecoilState } from 'recoil'
import { favouriteToursState } from '../../recoil/atoms'

import ToursWrapper from '../ToursWrapper/ToursWrapper'
import {
  FavouriteToursContainer,
  FavouriteToursHeader,
} from './FavouriteTours.styles'

const FavouriteTours = () => {
  const [favouriteTours, setFavouriteTours] =
    useRecoilState(favouriteToursState)

  const handleDeleteAll = () => {
    setFavouriteTours([])
  }

  return (
    <FavouriteToursContainer>
      <FavouriteToursHeader>
        <h2 onClick={handleDeleteAll}>Clear all</h2>
      </FavouriteToursHeader>
      <ToursWrapper data={favouriteTours} />
    </FavouriteToursContainer>
  )
}

export default FavouriteTours
