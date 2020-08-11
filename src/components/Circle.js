import React from 'react';
import styled, { keyframes } from 'styled-components';

const DefaultCircle = styled.div `
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: ${ props => props.color };
  box-shadow: inset 1px 1px 10px rgba(0, 0, 0, .3);
  border: 2px solid rgba(0, 0, 0, .2);
  align-self: center;
  justify-self: center;
`

const StressedCircle = styled.div `
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: ${ props => props.color };
  box-shadow: inset 1px 1px 10px rgba(0, 0, 0, .3);
  border: 2px solid rgba(38, 0, 255, .8);
  align-self: center;
  justify-self: center;
`

export default function Circle(props){
  // console.log("props: ", props);
      if (props.isStressed) {
        return <StressedCircle color={props.color} />
      } else {
        return <DefaultCircle color={props.color} />
      }
}