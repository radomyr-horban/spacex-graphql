import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'
import { createGlobalStyle } from 'styled-components'

import Home from './pages/Home'
import Favourites from './pages/Favourites'

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
  fontFamily: 'Sego',
}

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Sego', sans-serif;
    color: #333;
    background-color: #fff;

    /* center the page */
    /* display: flex;
    justify-content: center; */
  }

  /* Add more global styles as needed */
`

function App() {
  return (
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
  )
}

export default App
