import styled from 'styled-components'

import TourCard from './TourCard'

const CardsWrapper = styled.div`
  display: flex;
  margin: 30px 0;
  justify-content: space-between;
  width: 1800px;
`

const ToursWrapper = () => {
  return (
    <>
      <CardsWrapper>
        <TourCard />
        <TourCard />
        <TourCard />
      </CardsWrapper>
    </>
  )
}

export default ToursWrapper
