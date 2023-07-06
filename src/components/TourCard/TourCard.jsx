import cardPhotoOne from '../../assets/img/satellite.png'
import cardPhotoTwo from '../../assets/img/woman-in-space.png'
import cardPhotoThree from '../../assets/img/astronaut.png'

import favouriteIcon from '../../assets/buttons/favourite-icon.svg'
// import deleteIcon from '../../assets/buttons/delete-icon.svg'

import Button from '../Button/Button'
import {
  ButtonWrapper,
  CardContainer,
  CardDescription,
  CardImage,
  CardInfo,
  CardTitle,
} from './TourCard.styles'

const TourCard = ({ rocket, index }) => {
  const photos = [cardPhotoOne, cardPhotoTwo, cardPhotoThree]
  const currentPhotoSrc = photos[index % photos.length]

  return (
    <CardContainer>
      <CardImage src={currentPhotoSrc} alt='' />

      <CardInfo>
        <CardTitle>{rocket.name}</CardTitle>
        <CardDescription>{rocket.description}</CardDescription>
        <div>index - {index}</div>

        <ButtonWrapper>
          <Button>buy</Button>
          <img src={favouriteIcon} alt='favouriteIcon' />
        </ButtonWrapper>
      </CardInfo>
    </CardContainer>
  )
}

export default TourCard
