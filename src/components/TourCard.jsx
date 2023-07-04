import styled from 'styled-components'

import randomPhoto from '../assets/img/satellite.png'
import favouriteIcon from '../assets/buttons/favourite-icon.svg'
// import deleteIcon from '../assets/buttons/delete-icon.svg'

import Button from './Button'

const CardContainer = styled.div`
  max-width: 580px;
  border: 1px solid ${(props) => props.theme.button.secondary};
`
const CardImage = styled.img`
  width: 100%;
  /* max-width: 500px; */
  /* height: auto; */
`

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px 0;
`

const CardTitle = styled.h3`
  color: #333;
  font-size: 24px;
  margin-bottom: 10px;
`

const CardDescription = styled.div`
  font-size: 16px;
  margin-bottom: 40px;
`

const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
`

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
