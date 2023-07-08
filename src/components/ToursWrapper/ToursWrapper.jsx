import { useRecoilValue } from 'recoil'
import { currentPageState } from '../../recoil/atoms'

import TourCard from '../TourCard/TourCard'
import { CardsWrapper } from './ToursWrapper.styles'

import cardPhotoOne from '../../assets/img/satellite.png'
import cardPhotoTwo from '../../assets/img/woman-in-space.png'
import cardPhotoThree from '../../assets/img/astronaut.png'

import Slider from '../Slider/Slider'

const ToursWrapper = ({ data }) => {
  const photos = [cardPhotoOne, cardPhotoTwo, cardPhotoThree]
  const currentPage = useRecoilValue(currentPageState)

  const blankCardsNumber = Math.max(3 - data.length, 0)

  if (currentPage === 'home') {
    // console.log('currentPage', currentPage)
    console.log('ToursWrapper', photos)

    return (
      //! Why Slider is not displayed with <CardsWrapper/>?
      // <CardsWrapper>
      <Slider data={data} photos={photos} currentPage={currentPage} />
      // </CardsWrapper>
    )
  }
  return (
    <CardsWrapper>
      {data.map((rocket) => (
        <TourCard
          key={rocket.id}
          rocket={rocket}
          photoSrc={rocket.photoSrc}
          currentPage={currentPage}
        />
      ))}

      {Array(blankCardsNumber)
        .fill(null)
        .map((_, index) => (
          <TourCard key={`blank-${index}`} blankCard />
        ))}
    </CardsWrapper>
  )
}

export default ToursWrapper
