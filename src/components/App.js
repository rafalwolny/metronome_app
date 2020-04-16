import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import Slider from './Slider';

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    background-color: #F0F0F0;
  }

  #app{
    height: 100vh;
    width: 100vw;
  }
`

class App extends Component{
  render() {
    return(
      <React.Fragment>
        <GlobalStyle />
        <Slider />
      </React.Fragment>
    );
  }
}
export default App;