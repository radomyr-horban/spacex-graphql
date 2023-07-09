import { useRecoilValue } from 'recoil'
import { currentPageState } from '../recoil/atoms'

import TourCard from './TourCard'
import { CardsWrapper } from './styles/ToursWrapper.styled'

import cardPhotoOne from '../assets/img/satellite.png'
import cardPhotoTwo from '../assets/img/woman-in-space.png'
import cardPhotoThree from '../assets/img/astronaut.png'

import Slider from './Slider'

const ToursWrapper = ({ data }) => {
  const photos = [cardPhotoOne, cardPhotoTwo, cardPhotoThree]
  const currentPage = useRecoilValue(currentPageState)

  const blankCardsNumber = Math.max(3 - data.length, 0)

  if (currentPage === 'home') {
    return <Slider data={data} photos={photos} currentPage={currentPage} />
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
