import { useEffect, useRef } from 'react'

import styled from 'styled-components'

import NavBar from '../components/NavBar/NavBar'
import Banner from '../components/Banner/Banner'
import PopularTours from '../components/PopularTours/PopularTours'

import bannerImage from '../assets/banner/banner-home.png'
// import bannerImage from '../assets/banner/banner-with-dots.png'
// import bannerImage from '../assets/banner/banner-with-text.png'
import { useRecoilState } from 'recoil'
import { currentPageState } from '../recoil/atoms'

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Home = () => {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState)
  const ref = useRef(null)

  useEffect(() => {
    setCurrentPage('home')
  }, [setCurrentPage])

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <HomeContainer>
      <NavBar currentPage={currentPage} />
      <Banner
        title='the space is waiting for you'
        scrollerText='Explore tours'
        img={bannerImage}
        handleClick={handleClick}
        currentPage={currentPage}
      />
      <PopularTours refScroll={ref} />
    </HomeContainer>
  )
}

export default Home
