import { useEffect } from 'react'
import { styled } from 'styled-components'

import NavBar from '../components/NavBar/NavBar'
import Banner from '../components/Banner/Banner'
import FavouriteTours from '../components/FavouriteTours/FavouriteTours'

import favouritesBannerImage from '../assets/banner/banner-favourites.png'
import { useRecoilState } from 'recoil'
import { currentPageState } from '../recoil/atoms'

const FavouritesContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Favourites = () => {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState)

  useEffect(() => {
    setCurrentPage('favourites')
  }, [setCurrentPage])

  return (
    <FavouritesContainer>
      <NavBar currentPage={currentPage} />
      <Banner img={favouritesBannerImage} currentPage={currentPage} />
      <FavouriteTours />
    </FavouritesContainer>
  )
}

export default Favourites
