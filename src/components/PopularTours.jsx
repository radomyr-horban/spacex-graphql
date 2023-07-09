import { useQuery, gql } from '@apollo/client'

import ToursWrapper from './ToursWrapper'

import {
  PopularToursContainer,
  PopularToursHeader,
} from './styles/PopularTours.styled'

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
      <PopularToursHeader ref={refScroll}>popular tours</PopularToursHeader>
      <ToursWrapper data={data.rockets} />
    </PopularToursContainer>
  )
}

export default PopularTours
