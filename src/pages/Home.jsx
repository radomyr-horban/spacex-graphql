import { useRef } from 'react'

import styled from 'styled-components'

import NavBar from '../components/NavBar/NavBar'
import Banner from '../components/Banner/Banner'
import PopularTours from '../components/PopularTours/PopularTours'

import bannerImage from '../assets/img/satellite.png'

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Home = () => {
  const ref = useRef(null)

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <HomeContainer>
      <NavBar />
      <Banner
        title='the space is waiting for you'
        scrollerText='Explore tours'
        img={bannerImage}
        handleClick={handleClick}
      />
      <PopularTours refScroll={ref} />
    </HomeContainer>
  )
}

export default Home
