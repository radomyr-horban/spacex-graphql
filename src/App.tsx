import { BrowserRouter, Routes, Route } from 'react-router-dom'

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil'

import { ThemeProvider } from 'styled-components'
import { createGlobalStyle } from 'styled-components'

import Home from './pages/Home'
import Favourites from './pages/Favourites'

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://spacex-production.up.railway.app/',
  cache: new InMemoryCache(),
})

// const data = ...
// id  - as unique identity
// name  - card title
// description  - card subtitle

// client
//   .query({
//     query: gql`
//       query ExampleQuery {
//         rockets {
//           id
//           description
//           name
//         }
//       }
//     `,
//   })
//   .then((result) => console.log(result))

const theme = {
  dark: {
    primary: '#000',
    text: '#fff',
  },
  light: {
    primary: '#fff',
    text: '#000',
  },
  //! Write this properly
  button: {
    primary: '#ECECEC',
    secondary: '#D3EAFF',
  },
  favouriteButton: {
    active: '#DD377D',
  },
}

export const GlobalStyles = createGlobalStyle`
  html{
    margin: 0;

  }

  body {
    margin: 0;
    padding: 0;

    font-family: 'Syne', 'sans-serif';
    color: #333;
    background-color: #fff;

    /* center the page */
    /* display: flex;
    justify-content: center; */
  }

`

function App() {
  return (
    <RecoilRoot>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <div className='App'>
            <BrowserRouter>
              <Routes>
                <Route element={<Home />} path='/' />
                <Route element={<Favourites />} path='/favourites' />
              </Routes>
            </BrowserRouter>
          </div>
        </ThemeProvider>
      </ApolloProvider>
    </RecoilRoot>
  )
}

export default App
