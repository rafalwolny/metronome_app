import React from 'react';
import styled from 'styled-components';
import TickingSection from './TickingSection';

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
      miliseconds: 1500
    };
    this.handleClick = this.handleClick.bind(this);
  }

  bpmToMiliseconds = () => {
    // console.log(this.props.bpmValue);
    this.setState(state => ({ miliseconds: Math.round(60000 / this.props.bpmValue) }));
    // setTimeout(() => { console.log(this.state); }, 10);
  }

  handleClick() {
    this.setState(state => ({ isToggleOn: !state.isToggleOn }));
    this.bpmToMiliseconds();
    if(this.state.isToggleOn){
      setTimeout(() => { this.refs.tickingSection.stopTicking(); }, 5);
    } else {
      setTimeout(() => { this.refs.tickingSection.startTicking(); }, 5);
    }
  }

  render(){
    return(
      <Container>
        <TickingSection ref="tickingSection" miliseconds={this.state.miliseconds} isToggleOn={this.state.isToggleOn} />
        <PlayButton type="button" onClick={this.handleClick}>
          {this.state.isToggleOn ? 'WŁĄCZONY' : 'WYŁĄCZONY'}
        </PlayButton>
      </Container>
    )
  }
}