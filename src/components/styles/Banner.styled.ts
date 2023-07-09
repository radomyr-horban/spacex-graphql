import styled from 'styled-components'

type StyledBannerContainerProps = {
  isFavouritesPage: boolean
}

type ScrollerTextProps = {
  onClick: Function
}

export const StyledBannerContainer = styled.div<StyledBannerContainerProps>`
  height: ${(props) => (props.isFavouritesPage ? '60vh' : '100vh')};
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  z-index: -1;
`

export const Title = styled.h1`
  font-size: 150px;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
`

export const ScrollerText = styled.a<ScrollerTextProps>`
  position: absolute;
  bottom: 20px;
  font-size: 24px;
  color: #fff;
  text-align: center;

  &:hover {
    cursor: pointer;
  }
`
