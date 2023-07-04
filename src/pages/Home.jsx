import React, { useRef } from 'react'

import styled from 'styled-components'

import NavBar from '../components/NavBar'
import Banner from '../components/Banner'
import PopularTours from '../components/PopularTours'

import bannerImage from '../assets/img/satellite.png'

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Home = () => {
  // const ref = useRef<HTMLDivElement>(null)
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
