import styled from 'styled-components'

const BannerContainer = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`

const Title = styled.h1`
  font-size: 90px;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
`

const ScrollerText = styled.a`
  position: absolute;
  bottom: 20px;
  font-size: 24px;
  color: #fff;
  text-align: center;

  &:hover {
    cursor: pointer;
  }
`

const Banner = ({ title, scrollerText, img, handleClick }) => {
  return (
    <BannerContainer>
      <Image src={img} alt='Banner Image' />
      <Title>{title}</Title>
      {scrollerText && (
        <ScrollerText onClick={handleClick}>{scrollerText} &darr;</ScrollerText>
      )}
    </BannerContainer>
  )
}

export default Banner
