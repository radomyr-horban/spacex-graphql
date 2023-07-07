import { useSetRecoilState } from 'recoil'
import { favouriteToursState } from '../../recoil/atoms'

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

const TourCard = ({ rocket, photoSrc, currentPage }) => {
  const setFavouriteTours = useSetRecoilState(favouriteToursState)

  const handleAdd = (id) => {
    setFavouriteTours((data) => {
      if (data.find((el) => el.id === id)) {
        return data
      }
      return [...data, { ...rocket, photoSrc }]
    })
  }

  const handleDelete = (id) => {
    setFavouriteTours((data) => {
      return data.filter((rocket) => rocket.id !== id)
    })
  }

  return (
    <CardContainer>
      <CardImage src={photoSrc} alt='' />
      <CardInfo>
        <CardTitle>{rocket.name}</CardTitle>
        <CardDescription>{rocket.description}</CardDescription>
        <ButtonWrapper>
          <Button>buy</Button>
          <Button $primary $padding={'0'}>
            {currentPage === 'home' ? (
              <img
                src={favouriteIcon}
                alt='favouriteIcon'
                onClick={() => handleAdd(rocket.id)}
              />
            ) : (
              <img
                src={deleteIcon}
                alt='deleteIcon'
                onClick={() => handleDelete(rocket.id)}
              />
            )}
          </Button>
        </ButtonWrapper>
      </CardInfo>
    </CardContainer>
  )
}

export default TourCard
