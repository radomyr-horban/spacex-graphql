import NavBar from '../components/NavBar'
import Banner from '../components/Banner'
import ToursWrapper from '../components/ToursWrapper'

import favouritesBannerImage from '../assets/img/astronaut.png'

const Favourites = () => {
  return (
    <>
      <NavBar />
      <Banner title='Favourites' img={favouritesBannerImage} />
      <ToursWrapper />
    </>
  )
}

export default Favourites
