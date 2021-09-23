import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { ThemeProvider} from 'styled-components'

const theme = {
  colors: {
    red_300: "#ff7979",
    red_400: "#e33e3e",
    red_500: "#af0505",
  }
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
  ,
  document.getElementById('root')
);
