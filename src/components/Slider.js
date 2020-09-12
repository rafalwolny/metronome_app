import React from 'react';
import styled from 'styled-components';
import DisplayBPM from './DisplayBPM';
import ControlSection from './ControlSection';

const Container = styled.div `
  margin-top: 20px;
  height: 70vh;
  display: grid;
  grid-template-rows: 3fr 1fr 1fr 2fr;
  row-gap: 10px;
`

const BPMSlider = styled.input ` 
  margin: 0 20px;
  width: 90%;
  background: transparent;
  border-color: transparent;
  color: transparent;
  -webkit-appearance: none;
  justify-self: center;

  &:focus{
    outline: none;
  }

  &::-webkit-slider-runnable-track{
    background-color: rgba(6, 149, 193, 1);
    border-radius: 20px;
    box-shadow: inset 1px 1px 10px rgba(0, 0, 0, .3);
    border: 2px solid rgba(0, 0, 0, .2);
    cursor: pointer;
  }

  &::-webkit-slider-thumb{
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    border: 1px solid black;
    border-radius: 10px;
    background: white;
    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, .3);
    border: 2px solid rgba(0, 0, 0, .2);
    /* cursor: pointer; */
  }

  /* &::-moz-range-track{
    background-color: rgba(6, 149, 193, 1);
  }

  &::-moz-range-thumb{
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    border: 1px solid black;
    border-radius: 10px;
    background: white;
  }

  &::-ms-track{
    background-color: rgba(6, 149, 193, 1);
    width: 100%;
    cursor: pointer;
  }

  &::-ms-thumb{
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    border: 1px solid black;
    border-radius: 10px;
    background: white;
  } */
`

export default class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bpmValue: 90,
      miliseconds: 667
    }
  }

  bpmToMiliseconds = () => {
    setTimeout(() => { this.setState({ miliseconds: Math.round(60000 / this.state.bpmValue) }) }, 5)
    setTimeout(() => { console.log(this.state); }, 10);
  }

  render(){
    return(
      <Container>
        <DisplayBPM bpmValue={this.state.bpmValue} />
        <BPMSlider type="range" min={20} max={200} step={1} value={this.state.bpmValue} className="slider" onChange={(e) => { this.setState({bpmValue: e.target.value}); this.bpmToMiliseconds(); }} />
        <ControlSection miliseconds={this.state.miliseconds} />
      </Container>
    );
  }
}