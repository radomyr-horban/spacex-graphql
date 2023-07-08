import { createGlobalStyle } from 'styled-components'

export const theme = {
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
    }
  `
