import { useRecoilValue, useSetRecoilState } from 'recoil'
import { favouriteToursState } from '../recoil/atoms'

import favouriteIcon from '../assets/buttons/favourite-icon.svg'
import favouriteIconActive from '../assets/buttons/favourite-icon-active.svg'
import deleteIcon from '../assets/buttons/delete-icon.svg'

import StyledButton from './Button'

import {
  ButtonWrapper,
  CardContainer,
  CardDescription,
  CardImage,
  CardInfo,
  CardTitle,
} from './styles/TourCard.styled'

import { useEffect, useState } from 'react'

const TourCard = ({ rocket, photoSrc, currentPage, blankCard }) => {
  const setFavouriteTours = useSetRecoilState(favouriteToursState)
  const favouriteTours = useRecoilValue(favouriteToursState)

  // TODO: replace it with Recoil Atom
  const [isIconActive, setIsIconActive] = useState(false)

  useEffect(() => {
    if (
      rocket &&
      rocket.id &&
      favouriteTours.find((el) => el.id === rocket.id)
    ) {
      setIsIconActive(true)
    }
  }, [])

  const handleAdd = () => {
    setFavouriteTours((data) => {
      if (data.find((el) => el.id === rocket.id)) {
        return data
      }
      return [...data, { ...rocket, photoSrc }]
    })
    setIsIconActive(true)
  }

  const handleDelete = () => {
    setFavouriteTours((data) => {
      return data.filter((el) => el.id !== rocket.id)
    })
  }
  if (blankCard) {
    return <CardContainer></CardContainer>
  }
  return (
    <CardContainer>
      {/* <CardImage src={photoSrc} alt='' /> */}
      <img src={photoSrc} alt='' />
      <CardInfo>
        <CardTitle>{rocket.name}</CardTitle>
        <CardDescription>{rocket.description}</CardDescription>
        <ButtonWrapper>
          <StyledButton
            // padding={'0 150px'}
            // padding={'0 10vw'}
            width={'20vw'}
            fontWeight={'bold'}
            fontSize={'20px'}
          >
            buy
          </StyledButton>
          <StyledButton primary padding={'0'}>
            {currentPage === 'home' ? (
              <img
                src={isIconActive ? favouriteIconActive : favouriteIcon}
                alt={isIconActive ? 'favouriteIconActive' : 'favouriteIcon'}
                onClick={handleAdd}
              />
            ) : (
              <img src={deleteIcon} alt='deleteIcon' onClick={handleDelete} />
            )}
          </StyledButton>
        </ButtonWrapper>
      </CardInfo>
    </CardContainer>
  )
}

export default TourCard
