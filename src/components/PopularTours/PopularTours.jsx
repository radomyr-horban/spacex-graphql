import { useQuery, gql } from '@apollo/client'

import ToursWrapper from '../ToursWrapper/ToursWrapper'

import {
  PopularToursContainer,
  PopularToursHeader,
} from './PopularTours.styles'

const GET_SPACEX_DATA = gql`
  {
    rockets {
      id
      description
      name
    }
  }
`
const PopularTours = ({ refScroll }) => {
  const { loading, error, data } = useQuery(GET_SPACEX_DATA)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>

  return (
    <PopularToursContainer>
      <PopularToursHeader>
        <h1 ref={refScroll}>popular tours</h1>
      </PopularToursHeader>
      <ToursWrapper data={data.rockets} />
    </PopularToursContainer>
  )
}

export default PopularTours
