import styled from 'styled-components'

export const BannerContainer = styled.div`
  position: relative;
  height: ${(props) => (props.$isFavouritesPage ? '60vh' : '100vh')};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`

export const Title = styled.h1`
  font-size: 90px;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
`

export const ScrollerText = styled.a`
  position: absolute;
  bottom: 20px;
  font-size: 24px;
  color: #fff;
  text-align: center;

  &:hover {
    cursor: pointer;
  }
`
