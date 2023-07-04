// import React from 'react'

import { styled } from 'styled-components'

import Button from './Button'
import ToursWrapper from './ToursWrapper'

import sliderDots from '../assets/img/slider-dots.png'

const PopularToursContainer = styled.div`
  margin: 100px auto;
`
const PopularToursHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const SliderDots = styled.img`
  display: block;
  margin: 0 auto;
`

const PopularTours = ({ refScroll }) => {
  return (
    <PopularToursContainer>
      <PopularToursHeader>
        <h1 ref={refScroll}>popular tours</h1>
        <div>
          <Button
            $primary
            $fontSize='30px'
            $padding={'0 20px'}
            $margin={'0 10px'}
          >
            &lt;
          </Button>
          <Button $primary $fontSize='30px' $padding={'0 20px'}>
            &gt;
          </Button>
        </div>
      </PopularToursHeader>

      <ToursWrapper />

      <SliderDots src={sliderDots} alt='slider dots' />
    </PopularToursContainer>
  )
}

export default PopularTours
