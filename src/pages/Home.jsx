import NavBar from '../components/NavBar'
import Banner from '../components/Banner'
import PopularTours from '../components/PopularTours'

const Home = () => {
  return (
    <>
      <NavBar />
      <Banner
        title='the space is waiting for you'
        scrollerText='Explore tours'
      />
      <PopularTours />
    </>
  )
}
export default Home
