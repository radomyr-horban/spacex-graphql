import { BannerContainer, Image, ScrollerText, Title } from './Banner.styles'

const Banner = ({
  title = '',
  scrollerText,
  img,
  handleClick,
  currentPage,
}) => {
  return (
    <BannerContainer $isFavouritesPage={currentPage === 'favourites'}>
      <Image src={img} alt='Banner Image' />
      <Title>{title}</Title>
      {scrollerText && (
        <ScrollerText onClick={handleClick}>{scrollerText} &darr;</ScrollerText>
      )}
    </BannerContainer>
  )
}

export default Banner
