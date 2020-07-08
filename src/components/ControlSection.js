import React from 'react';
import styled from 'styled-components';
import TickingSection from './TickingSection';
import Circle from './Circle';

const Container = styled.div `
  width: 80vw;
  height: 40vw;
  justify-self: center;
  align-self: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`

const PlayButton = styled.button `
  margin: 0;
  padding: 0;
  align-self: center;
  grid-column: 2 / span 2;
  grid-row: 2;
`

export default class ControlSection extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
      isCircle1Active: false,
      isCircle2Active: false,
      isCircle3Active: false,
      isCircle4Active: false,
      isCircle1Stressed: false,
      isCircle2Stressed: true,
      isCircle3Stressed: false,
      isCircle4Stressed: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.stopLoop = this.stopLoop.bind(this);
    this.loop = this.loop.bind(this);
    this.stressedClick = React.createRef();
    this.defaultClick = React.createRef();
  }

  circle1Change = () => {
    if (!this.state.isCircle1Active) {this.state.isCircle1Stressed ? this.stressedClick.current.play() : this.defaultClick.current.play() }
    this.setState(state => ({ isCircle1Active: !state.isCircle1Active }))
  }

  circle2Change = () => {
    if (!this.state.isCircle2Active) {this.state.isCircle2Stressed ? this.stressedClick.current.play() : this.defaultClick.current.play() }
    this.setState(state => ({ isCircle2Active: !state.isCircle2Active }))
  }

  circle3Change = () => {
    if (!this.state.isCircle3Active) {this.state.isCircle3Stressed ? this.stressedClick.current.play() : this.defaultClick.current.play() }
    this.setState(state => ({ isCircle3Active: !state.isCircle3Active }))
  }

  circle4Change = () => {
    if (!this.state.isCircle4Active) {this.state.isCircle4Stressed ? this.stressedClick.current.play() : this.defaultClick.current.play() }
    this.setState(state => ({ isCircle4Active: !state.isCircle4Active }))
  }

  loop(){
    if (this.state.isToggleOn) this.myInterval = setInterval(() => {
      if (this.state.isCircle1Active) { this.circle1Change(); this.circle2Change(); }
      else if (this.state.isCircle2Active) { this.circle2Change(); this.circle3Change(); }
      else if (this.state.isCircle3Active) { this.circle3Change(); this.circle4Change(); }
      else if (this.state.isCircle4Active) { this.circle4Change(); this.circle1Change(); }
      else this.circle1Change();
    }, this.props.miliseconds)
  }

  stopLoop(){
    if (!this.state.isToggleOn){
      clearInterval(this.myInterval);
      if (this.state.isCircle1Active) this.circle1Change();
      if (this.state.isCircle2Active) this.circle2Change();
      if (this.state.isCircle3Active) this.circle3Change();
      if (this.state.isCircle4Active) this.circle4Change();
    }
  }

  handleClick() {
    console.log("state: ", this.state, "props: ", this.props);
    this.setState(state => ({ isToggleOn: !state.isToggleOn }));
    if(this.state.isToggleOn){
      setTimeout(() => { this.loop(); }, 5);
    } else {
      setTimeout(() => { this.stopLoop(); }, 5);
    }
    setTimeout(() => {
      console.log("state: ", this.state, "props: ", this.props);
      this.loop();
    }, 30)

  }

  render(){
    return(
      <Container>
        {/* <TickingSection ref="tickingSection" miliseconds={this.props.miliseconds} isToggleOn={this.state.isToggleOn} /> */}
        <Circle color={this.state.isCircle1Active ? '#ffe417' : "#0695C1"}/>
        <Circle color={this.state.isCircle2Active ? '#ffe417' : "#0695C1"}/>
        <Circle color={this.state.isCircle3Active ? '#ffe417' : "#0695C1"}/>
        <Circle color={this.state.isCircle4Active ? '#ffe417' : "#0695C1"}/>
        <PlayButton type="button" onClick={this.handleClick}>
          {this.state.isToggleOn ? 'WŁĄCZONY' : 'WYŁĄCZONY'}
        </PlayButton>
        <audio id="stressed" ref={this.stressedClick} src="src/audio/Click1.mp3" />
        <audio id="default" ref={this.defaultClick} src="src/audio/Click2.mp3" />
      </Container>
    )
  }
}