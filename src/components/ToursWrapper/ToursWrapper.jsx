import { useRecoilValue } from 'recoil'
import { currentPageState } from '../../recoil/atoms'

import TourCard from '../TourCard/TourCard'
import { CardsWrapper } from './ToursWrapper.styles'

import cardPhotoOne from '../../assets/img/satellite.png'
import cardPhotoTwo from '../../assets/img/woman-in-space.png'
import cardPhotoThree from '../../assets/img/astronaut.png'

const ToursWrapper = ({ data }) => {
  const photos = [cardPhotoOne, cardPhotoTwo, cardPhotoThree]
  const currentPage = useRecoilValue(currentPageState)

  const blankCardsNumber = Math.max(3 - data.length, 0)

  return (
    <CardsWrapper>
      {data.map((rocket, index) => (
        <TourCard
          key={rocket.id}
          rocket={rocket}
          photoSrc={
            currentPage === 'home'
              ? photos[index % photos.length]
              : rocket.photoSrc
          }
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
