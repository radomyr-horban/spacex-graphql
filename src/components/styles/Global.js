import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap');

    *{
        box-sizing: border-box;
    }

    body {
      margin: 0;
      padding: 0;
  
      font-family: 'Syne', 'sans-serif';
      color: #333;
      background-color: #fff;
    }

    img{
        width: 100%;
    }
  `
export default GlobalStyles
