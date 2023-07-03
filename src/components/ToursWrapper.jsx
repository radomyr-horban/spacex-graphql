import styled from 'styled-components'

import TourCard from './TourCard'

const CardsWrapper = styled.div`
  display: flex;
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
