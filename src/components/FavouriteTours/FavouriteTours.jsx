import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { favouriteToursState } from '../../recoil/atoms'

import ToursWrapper from '../ToursWrapper/ToursWrapper'
import {
  FavouriteToursContainer,
  FavouriteToursHeader,
} from './FavouriteTours.styles'

const FavouriteTours = () => {
  // const favouriteTours = useRecoilValue(favouriteToursState)
  // const setFavouriteTours = useSetRecoilState(favouriteToursState)
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
      <ToursWrapper
        data={favouriteTours}
        // setFavouriteTours={setFavouriteTours}
      />
    </FavouriteToursContainer>
  )
}

export default FavouriteTours
