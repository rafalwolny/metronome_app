import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import MainDisplay from './MainDisplay'


const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
  }

  #app{
    height: 100vh;
    display: grid;
    grid-template-rows: 2fr 1fr 1fr 1fr 1fr;
  }
`

class App extends Component{
  render() {
    return(
      <React.Fragment>
        <GlobalStyle />
        <MainDisplay />
      </React.Fragment>
    );
  }
}
export default App;