import React from 'react';
import styled from 'styled-components';
import TickingSection from './TickingSection';

const Container = styled.div `
  width: 80vw;
  height: 60vw;
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
        <TickingSection ref="tickingSection" miliseconds={this.props.miliseconds} isChecked={this.state.isChecked} isToggleOn={this.state.isToggleOn} />
        <PlayButton type="button" onClick={this.handleClick}>
          {this.state.isToggleOn ? 'WŁĄCZONY' : 'WYŁĄCZONY'}
        </PlayButton>
          <Label htmlFor="stress">Stress fisrt beat?</Label>
          <Input type="checkbox" checked={this.state.isChecked} onChange={this.handleCheckbox} name="stress" id="stress" />
      </Container>
    )
  }
}