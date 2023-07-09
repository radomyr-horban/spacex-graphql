import {
  StyledBannerContainer,
  Image,
  ScrollerText,
  Title,
} from './styles/Banner.styled'

const Banner = ({
  title = '',
  scrollerText,
  img,
  handleClick,
  currentPage,
}) => {
  return (
    <StyledBannerContainer $isFavouritesPage={currentPage === 'favourites'}>
      <Image src={img} alt='Banner Image' />
      <Title>{title}</Title>
      {scrollerText && (
        <ScrollerText onClick={handleClick}>{scrollerText} &darr;</ScrollerText>
      )}
    </StyledBannerContainer>
  )
}

export default Banner
