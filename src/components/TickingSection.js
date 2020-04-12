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
      circleOne:   { id: '1', color: '#ffe417', isActive: true },
      circleTwo:   { id: '2', color: '#0695C1', isActive: false },
      circleThree: { id: '3', color: '#0695C1', isActive: false },
      circleFour:  { id: '4', color: '#0695C1', isActive: false }
    };
    this.ticking = this.ticking.bind(this);
  }

  circleOneChange(){
    this.setState(state => {
      let circleOne = Object.assign({}, state.circleOne);
      circleOne.isActive ? circleOne.color = '#0695C1' : circleOne.color = '#ffe417' ;
      circleOne.isActive = !state.circleOne.isActive;
      return { circleOne };
    });
  }

  circleTwoChange(){
    this.setState(state => {
      let circleTwo = Object.assign({}, state.circleTwo);
      circleTwo.isActive ? circleTwo.color = '#0695C1' : circleTwo.color = '#ffe417' ;
      circleTwo.isActive = !state.circleTwo.isActive;
      return { circleTwo };
    });
  }

  circleThreeChange(){
    this.setState(state => {
      let circleThree = Object.assign({}, state.circleThree);
      circleThree.isActive ? circleThree.color = '#0695C1' : circleThree.color = '#ffe417' ;
      circleThree.isActive = !state.circleThree.isActive;
      return { circleThree };
    });
  }

  circleFourChange(){
    this.setState(state => {
      let circleFour = Object.assign({}, state.circleFour);
      circleFour.isActive ? circleFour.color = '#0695C1' : circleFour.color = '#ffe417' ;
      circleFour.isActive = !state.circleFour.isActive;
      return { circleFour };
    });
  }

  ticking(){
    this.circleOneChange();
    // this.circleTwoChange();
    // this.circleThreeChange();
    // this.circleFourChange();

    setTimeout(() => { console.log(this.state); }, 10);
  }



  render(){
    return(
      <React.Fragment>
        <Circle color={this.state.circleOne.color} />
        <Circle color={this.state.circleTwo.color} />
        <Circle color={this.state.circleThree.color} />
        <Circle color={this.state.circleFour.color} />
      </React.Fragment>
    );
  }
}