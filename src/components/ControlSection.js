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
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({ isToggleOn: !state.isToggleOn }));
    console.log(this.refs.tickingSection);
    
  }

  render(){
    return(
      <Container>
        <TickingSection ref="tickingSection" bpmValue={this.props.bpmValue} />
        <PlayButton type="button" onClick={this.handleClick}>
          {this.state.isToggleOn ? 'WŁĄCZONY' : 'WYŁĄCZONY'}
        </PlayButton>
      </Container>
    )
  }
}