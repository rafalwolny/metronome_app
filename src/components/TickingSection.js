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
    this.stressedClick = React.createRef();
    this.defaultClick = React.createRef();
    this.state = {
      circleOne:   { color: '#0695C1', isActive: false, isStressed: true },
      circleTwo:   { color: '#0695C1', isActive: false, isStressed: false },
      circleThree: { color: '#0695C1', isActive: false, isStressed: false },
      circleFour:  { color: '#0695C1', isActive: false, isStressed: false },
      miliseconds: 667
    };
    this.startTicking = this.startTicking.bind(this);
    this.stopTicking = this.stopTicking.bind(this);
  }

  circleOneChange = () => {
    if (!this.state.circleOne.isActive) {this.state.circleOne.isStressed ? this.stressedClick.current.play() : this.defaultClick.current.play() }
    this.setState(state => {
      let circleOne = Object.assign({}, state.circleOne);
      circleOne.isActive ? circleOne.color = '#0695C1' : circleOne.color = '#ffe417' ;
      circleOne.isActive = !state.circleOne.isActive;
      return { circleOne };
    });
  }

  circleTwoChange = () => {
    if (!this.state.circleTwo.isActive) {this.state.circleTwo.isStressed ? this.stressedClick.current.play() : this.defaultClick.current.play() }
    this.setState(state => {
      let circleTwo = Object.assign({}, state.circleTwo);
      circleTwo.isActive ? circleTwo.color = '#0695C1' : circleTwo.color = '#ffe417' ;
      circleTwo.isActive = !state.circleTwo.isActive;
      return { circleTwo };
    });
  }

  circleThreeChange = () => {
    if (!this.state.circleThree.isActive) {this.state.circleThree.isStressed ? this.stressedClick.current.play() : this.defaultClick.current.play() }
    this.setState(state => {
      let circleThree = Object.assign({}, state.circleThree);
      circleThree.isActive ? circleThree.color = '#0695C1' : circleThree.color = '#ffe417' ;
      circleThree.isActive = !state.circleThree.isActive;
      return { circleThree };
    });
  }

  circleFourChange = () => {
    if (!this.state.circleFour.isActive) {this.state.circleFour.isStressed ? this.stressedClick.current.play() : this.defaultClick.current.play() }
    this.setState(state => {
      let circleFour = Object.assign({}, state.circleFour);
      circleFour.isActive ? circleFour.color = '#0695C1' : circleFour.color = '#ffe417' ;
      circleFour.isActive = !state.circleFour.isActive;
      return { circleFour };
    });
  }

  startTicking(){
    // setTimeout(() => { console.log('state: ', this.state); console.log('props: ', this.props); }, 5);
    if (this.props.isToggleOn) this.myInterval = setInterval(() => {
      if (this.state.circleOne.isActive) { this.circleOneChange(); this.circleTwoChange(); }
      else if (this.state.circleTwo.isActive) { this.circleTwoChange(); this.circleThreeChange(); }
      else if (this.state.circleThree.isActive) { this.circleThreeChange(); this.circleFourChange(); }
      else if (this.state.circleFour.isActive) { this.circleFourChange(); this.circleOneChange(); }
      else this.circleOneChange();
    }, this.state.miliseconds);
  }

  stopTicking(){
    clearInterval(this.myInterval);
    if(this.state.circleOne.isActive) { this.circleOneChange(); }
    if(this.state.circleTwo.isActive) { this.circleTwoChange(); }
    if(this.state.circleThree.isActive) { this.circleThreeChange(); }
    if(this.state.circleFour.isActive) { this.circleFourChange(); }

    // setTimeout(() => { console.log('state: ', this.state); console.log('props: ', this.props); }, 5);
  }

  stress = () => {this.setState(state => { 
    let circleOne = Object.assign({}, state.circleOne); 
    circleOne.isStressed = !circleOne.isStressed; 
    return { circleOne }; })}

  componentDidUpdate(){
    if(this.state.miliseconds != this.props.miliseconds) { 
      clearInterval(this.myInterval);
      this.setState({ miliseconds: this.props.miliseconds })
      console.log(this.props.isToggleOn);
      setTimeout(() => { clearInterval(this.myInterval); this.startTicking(); }, 5);
    }
    // setTimeout(() => { console.log('componentDidUpdate: state: ', this.state); console.log('props: ', this.props); }, 5);
  }

  render(){
    return(
      <React.Fragment>
        <audio id="stressed" ref={this.stressedClick} src="src/audio/Click1.mp3" />
        <audio id="default" ref={this.defaultClick} src="src/audio/Click2.mp3" />
        <Circle color={this.state.circleOne.color} onClick={this.stress}/>
        <Circle color={this.state.circleTwo.color}></Circle>
        <Circle color={this.state.circleThree.color}></Circle>
        <Circle color={this.state.circleFour.color}></Circle>
      </React.Fragment>
    );
  }
}