import { styled } from 'styled-components'

import NavBar from '../components/NavBar/NavBar'
import Banner from '../components/Banner/Banner'
import FavouriteTours from '../components/FavouriteTours/FavouriteTours'

import favouritesBannerImage from '../assets/img/astronaut.png'

const FavouritesContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Favourites = () => {
  return (
    <FavouritesContainer>
      <NavBar />
      <Banner title='Favourites' img={favouritesBannerImage} />
      <FavouriteTours />
    </FavouritesContainer>
  )
}

export default Favourites
