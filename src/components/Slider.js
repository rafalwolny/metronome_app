import React from 'react';
import styled from 'styled-components';
import MainDisplay from './MainDisplay';

const Container = styled.div `
  height: 50vh;
  display: grid;
  grid-template-rows: 3fr 1fr 1fr;
`

export default class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bpmValue: 50
    }
  }


  render(){
    return(
      <Container>
        <MainDisplay bpmValue={this.state.bpmValue} />
        <input type="range" min={20} max={200} value={this.state.bpmValue} className="slider" onChange={this.handleOnChange} />
      </Container>
    );
  }
}