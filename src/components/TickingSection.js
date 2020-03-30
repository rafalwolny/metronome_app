import React from 'react';
import styled from 'styled-components';

const Circle = styled.div `
  height: 60%;
  width: 60%;
  border-radius: 50%;
  background-color: ${props => props.color};
  box-shadow: inset 1px 0px 7px rgba(0, 0, 0, .7);
  border: 1px solid rgba(0, 0, 0, .3);
  align-self: center;
  justify-self: center;
`

export default class TickingSection extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      circleColorOn: '#0695C1',
      circleColorOff: '#ffe417',
      miliseconds: null
    };
    // this.bpmToMiliseconds = this.bpmToMiliseconds.bind(this);
  }

  bpmToMiliseconds(){
    console.log(this.props.bpmValue);
  }

  render(){
    return(
      <React.Fragment>
        <Circle color={this.state.circleColorOff} />
        <Circle color={this.state.circleColorOn} />
        <Circle color={this.state.circleColorOn} />
        <Circle color={this.state.circleColorOn} />
      </React.Fragment>
    );
  }
}