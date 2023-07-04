import NavBar from '../components/NavBar'
import Banner from '../components/Banner'
import PopularTours from '../components/PopularTours'

import bannerImage from '../assets/img/satellite.png'

import styled from 'styled-components'

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Home = () => {
  return (
    <>
      <HomeContainer>
        <NavBar />
        <Banner
          title='the space is waiting for you'
          scrollerText='Explore tours'
          img={bannerImage}
          // NavBarComponent={NavBar}
        />
        <PopularTours />
      </HomeContainer>
    </>
  )
}
export default Home
