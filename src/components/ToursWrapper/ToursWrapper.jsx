import TourCard from '../TourCard/TourCard'
import { CardsWrapper } from './ToursWrapper.styles'

import cardPhotoOne from '../../assets/img/satellite.png'
import cardPhotoTwo from '../../assets/img/woman-in-space.png'
import cardPhotoThree from '../../assets/img/astronaut.png'
import { currentPageState } from '../../recoil/atoms'
import { useRecoilValue } from 'recoil'

const ToursWrapper = ({ data }) => {
  const photos = [cardPhotoOne, cardPhotoTwo, cardPhotoThree]
  const currentPage = useRecoilValue(currentPageState)

  return (
    <CardsWrapper>
      {data.map((rocket, index) => {
        return (
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
        )
      })}
    </CardsWrapper>
  )
}

export default ToursWrapper
