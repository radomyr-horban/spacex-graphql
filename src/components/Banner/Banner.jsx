import { BannerContainer, Image, ScrollerText, Title } from './Banner.styles'

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
