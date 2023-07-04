import { styled } from 'styled-components'

import ToursWrapper from './ToursWrapper'

const FavouriteToursContainer = styled.div`
  margin: 100px auto;
`
const FavouriteToursHeader = styled.div`
  text-align: right;
`

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
