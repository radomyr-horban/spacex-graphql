import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { RecoilRoot } from 'recoil'

import Home from './pages/Home'
import Favourites from './pages/Favourites'

import { GlobalStyles, theme } from './App.styles'

const client = new ApolloClient({
  uri: 'https://spacex-production.up.railway.app/',
  cache: new InMemoryCache(),
})

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
