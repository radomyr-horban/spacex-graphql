import randomPhoto from '../../assets/img/satellite.png'
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

const TourCard = () => {
  return (
    <CardContainer>
      <CardImage src={randomPhoto} alt='' />

      <CardInfo>
        <CardTitle>Card title</CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </CardDescription>

        <ButtonWrapper>
          <Button>buy</Button>
          <img src={favouriteIcon} alt='favouriteIcon' />
          {/* <img src={deleteIcon} alt='deleteIcon' /> */}
        </ButtonWrapper>
      </CardInfo>
    </CardContainer>
  )
}

export default TourCard
