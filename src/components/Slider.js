import React from 'react';
import styled from 'styled-components';
import DisplayBPM from './DisplayBPM';
import ControlSection from './ControlSection';

const Container = styled.div `
  height: 70vh;
  display: grid;
  grid-template-rows: 3fr 1fr 1fr 2fr;
`

const BPMSlider = styled.input ` 
  margin: 0;
`

export default class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bpmValue: 90
    }
  }

  render(){
    return(
      <Container>
        <DisplayBPM bpmValue={this.state.bpmValue} />
        <BPMSlider type="range" min={20} max={200} value={this.state.bpmValue} className="slider" onChange={(e) => this.setState({bpmValue: e.target.value})} />
        <ControlSection bpmValue={this.state.bpmValue} />
      </Container>
    );
  }
}