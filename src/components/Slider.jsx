import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import TourCard from './TourCard'
import CustomButtonGroupAsArrows from './CustomArrows'

const Slider = ({ data, photos, currentPage }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  }

  return (
    <div
      style={{
        position: 'relative',
      }}
    >
      <Carousel
        responsive={responsive}
        showDots={true}
        infinite
        arrows={false}
        customButtonGroup={<CustomButtonGroupAsArrows />}
        renderButtonGroupOutside
        renderDotsOutside
      >
        {data.map((rocket, index) => (
          <TourCard
            key={rocket.id}
            rocket={rocket}
            photoSrc={photos[index % photos.length]}
            currentPage={currentPage}
          />
        ))}
      </Carousel>
    </div>
  )
}

export default Slider
