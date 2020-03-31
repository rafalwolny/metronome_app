import React from 'react';
import styled from 'styled-components';

const Circle = styled.div `
  height: 60%;
  width: 60%;
  border-radius: 50%;
  background-color: ${ props => props.color };
  box-shadow: inset 1px 1px 10px rgba(0, 0, 0, .3);
  border: 2px solid rgba(0, 0, 0, .2);
  align-self: center;
  justify-self: center;
`

export default class TickingSection extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      circleOneColor: '#ffe417',
      circleTwoColor: '#0695C1',
      circleThreeColor: '#0695C1',
      circleFourColor: '#0695C1',
      miliseconds: 1500
    };
    this.ticking = this.ticking.bind(this);
  }

  ticking(){
    this.bpmToMiliseconds();
    setTimeout(() => { console.log(this.state.miliseconds); }, 10);
    this.setState(state => ({ circleTwoColor: '#ffe417' }));
  }

  bpmToMiliseconds = () => {
    console.log(this.props.bpmValue);
    this.setState(state => ({ miliseconds: Math.round(this.props.bpmValue * 100 / 6) }));
  }

  render(){
    return(
      <React.Fragment>
        <Circle color={this.state.circleOneColor} />
        <Circle color={this.state.circleTwoColor} />
        <Circle color={this.state.circleThreeColor} />
        <Circle color={this.state.circleFourColor} />
      </React.Fragment>
    );
  }
}