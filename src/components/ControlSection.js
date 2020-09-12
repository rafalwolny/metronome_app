import React from 'react';
import styled from 'styled-components';
import TickingSection from './TickingSection';

const Container = styled.div `
  width: 80vw;
  height: 60vw;
  margin-top: 20px;
  justify-self: center;
  align-self: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
`

const PlayButton = styled.button `
  margin: 0;
  padding: 0;
  align-self: center;
  grid-column: 2 / span 2;
  grid-row: 2;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 2px;
  cursor: pointer;
  height: 40px;
  background-color: ${ props => props.color1 };
  color: ${ props => props.color2 };
  outline: none;
  border-radius: 5px;
  border: 2px solid ${ props => props.color2 };
  box-shadow: inset 2px 2px 3px rgba(0, 0, 0, .3);
`

const Label = styled.label `
  align-self: center;
  justify-self: right;
  grid-column: 1 / span 2;
  grid-row: 3;

  &:hover{
    border-bottom: 1px black solid;
  }
`

const Input = styled.input `
  margin: 0 0 0 15px;
  align-self: center;
  justify-self: left;
  grid-column: 3;
  grid-row: 3;
`

export default class ControlSection extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
      isChecked: true
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    // console.log('props: ', this.props);
  }

  handleClick() {
    this.setState(state => ({ isToggleOn: !state.isToggleOn }));
    if(this.state.isToggleOn){
      setTimeout(() => { this.refs.tickingSection.stopTicking(); }, 5);
    } else {
      setTimeout(() => { this.refs.tickingSection.startTicking(); }, 5);
    }
  }

  handleCheckbox() {
    this.setState(state => ({ isChecked: !state.isChecked }));
    // setTimeout(() => { console.log(this.state) }, 100);
  }

  render(){
    return(
      <Container>
        <TickingSection 
          ref="tickingSection" 
          miliseconds={this.props.miliseconds} 
          isChecked={this.state.isChecked} 
          isToggleOn={this.state.isToggleOn} 
        />
        <PlayButton 
          type="button" 
          onClick={this.handleClick} 
          color1={this.state.isToggleOn ? '#0695C1' : '#F0F0F0'} 
          color2={this.state.isToggleOn ? '#F0F0F0' : '#0695C1'}
        >
          {this.state.isToggleOn ? 'STOP' : 'PLAY'}
        </PlayButton>
          <Label htmlFor="stress">Stress fisrt beat?</Label>
          <Input type="checkbox" checked={this.state.isChecked} onChange={this.handleCheckbox} name="stress" id="stress" />
      </Container>
    )
  }
}