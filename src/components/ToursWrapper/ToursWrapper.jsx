import TourCard from '../TourCard/TourCard'
import { CardsWrapper } from './ToursWrapper.styles'

import cardPhotoOne from '../../assets/img/satellite.png'
import cardPhotoTwo from '../../assets/img/woman-in-space.png'
import cardPhotoThree from '../../assets/img/astronaut.png'

const ToursWrapper = ({ data, page }) => {
  const photos = [cardPhotoOne, cardPhotoTwo, cardPhotoThree]

  return (
    <CardsWrapper>
      {data.map((rocket, index) => {
        return (
          <TourCard
            key={rocket.id}
            page={page}
            rocket={rocket}
            photoSrc={
              page === 'home' ? photos[index % photos.length] : rocket.photoSrc
            }
          />
        )
      })}
    </CardsWrapper>
  )
}

export default ToursWrapper
