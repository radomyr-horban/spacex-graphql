import { useRecoilState } from 'recoil'
import { favouriteToursState } from '../../recoil/atoms'

import ToursWrapper from '../ToursWrapper/ToursWrapper'
import {
  ClearAllTitle,
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
        <ClearAllTitle onClick={handleDeleteAll}>
          {favouriteTours.length ? 'Clear all' : ''}
        </ClearAllTitle>
      </FavouriteToursHeader>
      <ToursWrapper data={favouriteTours} />
    </FavouriteToursContainer>
  )
}

export default FavouriteTours
