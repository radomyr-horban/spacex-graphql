import {
  StyledBannerContainer,
  Image,
  ScrollerText,
  Title,
} from './styles/Banner.styled'

type BannerProps = {
  title?: string
  scrollerText?: string
  img: string
  handleClick?: () => void | undefined
  currentPage: string
}

const Banner = ({
  title = '',
  scrollerText,
  img,
  handleClick,
  currentPage,
}: BannerProps) => {
  return (
    <StyledBannerContainer isFavouritesPage={currentPage === 'favourites'}>
      <Image src={img} alt='Banner Image' />
      <Title>{title}</Title>
      {scrollerText && handleClick && (
        <ScrollerText onClick={handleClick}>{scrollerText} &darr;</ScrollerText>
      )}
    </StyledBannerContainer>
  )
}

export default Banner
