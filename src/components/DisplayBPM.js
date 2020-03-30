import React from 'react';
import styled from 'styled-components';

const BpmMeter = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 5rem;
  text-align: center;
  grid-row-start: 1;
  align-self: end;
  background-color: rgba(0, 0, 0, 0.7);
  color: transparent;
  text-shadow: 0px 1px 2px rgba(6, 149, 193, .9);
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
`;

const TempoName = styled.p `
  margin: 0;
  padding: 0;
  font-size: 2rem;
  color: rgba(6, 149, 193, 1);
  text-align: center;
  grid-row-start: 2;
  align-self: start;
  background-color: rgba(0, 0, 0, 0.7);
  color: transparent;
  text-shadow: 0px 1px 1px rgba(6, 149, 193, .9);
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
`

export default function DisplayBPM(props){
    return(
      <React.Fragment>
        <BpmMeter>{props.bpmValue} BPM</BpmMeter>
        <TempoName>Presto</TempoName>
      </React.Fragment>
    );
}