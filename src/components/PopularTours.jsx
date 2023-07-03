// import TourCard from './TourCard'
import ToursWrapper from './ToursWrapper'

const PopularTours = () => {
  return (
    <>
      <div>
        {/* carousel title */}
        <h1>popular tours</h1>
        {/* carousel controllers */}
        <div>
          <i>&lt;</i>
          <i>&gt;</i>
        </div>
      </div>
      {/* pass an array of fetched caards and map through them */}
      <ToursWrapper />
    </>
  )
}

export default PopularTours
