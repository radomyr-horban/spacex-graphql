import { useRecoilValue, useSetRecoilState } from 'recoil'

import cardPhotoOne from '../../assets/img/satellite.png'
import cardPhotoTwo from '../../assets/img/woman-in-space.png'
import cardPhotoThree from '../../assets/img/astronaut.png'

import favouriteIcon from '../../assets/buttons/favourite-icon.svg'
import deleteIcon from '../../assets/buttons/delete-icon.svg'

import Button from '../Button/Button'
import {
  ButtonWrapper,
  CardContainer,
  CardDescription,
  CardImage,
  CardInfo,
  CardTitle,
} from './TourCard.styles'
import { favouriteToursState } from '../../recoil/atoms'

const TourCard = ({ rocket, index }) => {
  const photos = [cardPhotoOne, cardPhotoTwo, cardPhotoThree]
  const currentPhotoSrc = photos[index % photos.length]

  const setFavouriteTours = useSetRecoilState(favouriteToursState)
  // const favouriteTours = useRecoilValue(favouriteToursState)

  const handleAdd = (id) => {
    setFavouriteTours((data) => {
      if (data.find((el) => el.id === id)) {
        return data
      }
      return [...data, rocket]
    })
  }

  const handleDelete = (id) => {
    setFavouriteTours((data) => {
      return data.filter((rocket) => rocket.id !== id)
    })
  }

  return (
    <CardContainer>
      <CardImage src={currentPhotoSrc} alt='' />

      <CardInfo>
        <CardTitle>{rocket.name}</CardTitle>
        <CardDescription>{rocket.description}</CardDescription>
        <div>index - {index}</div>

        <ButtonWrapper>
          <Button>buy</Button>
          <img
            src={favouriteIcon}
            alt='favouriteIcon'
            onClick={() => handleAdd(rocket.id)}
          />
          <img
            src={deleteIcon}
            alt='deleteIcon'
            onClick={() => handleDelete(rocket.id)}
          />
        </ButtonWrapper>
      </CardInfo>
    </CardContainer>
  )
}

export default TourCard
