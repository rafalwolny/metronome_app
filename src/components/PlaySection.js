import React from 'react';
import styled from 'styled-components';

const Container = styled.div `
  width: 60vw;
  justify-self: center;
  align-self: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
`

const PlayButton = styled.button `
  margin: 0;
  padding: 0;
  grid-column: 2 / span 2;
  grid-row: 3;
`
const TickingSection = styled.div `

`

export default function PlaySection(props){
  return(
    <Container>
      <PlayButton type="button" onClick={() => {console.log('Just simple log, please code a real function!')}}>Click me!</PlayButton>
    </Container>
  )
}