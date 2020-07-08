import React from 'react';
import styled from 'styled-components';

const StyledCircle = styled.div `
  height: 60%;
  width: 60%;
  border-radius: 50%;
  background-color: ${ props => props.color };
  box-shadow: inset 1px 1px 10px rgba(0, 0, 0, .3);
  border: 2px solid rgba(0, 0, 0, .2);
  align-self: center;
  justify-self: center;
`

export default function Circle(props){
  // console.log("props: ", props);
  return(
    <React.Fragment>
      <StyledCircle color={props.color} />
    </React.Fragment>
  );
}