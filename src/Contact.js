import React, { Component } from 'react';
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  border:1px solid #a9a9a9;
`;

class Contact extends Component {
  render() {
    return (
      

      <Wrapper>
        <Title>
          Contact page (styled component implementation)
        </Title>
        <Input placeholder="@mxstbr" type="text" />
        <Input value="@geelen" type="text" />
    </Wrapper>
     
    );
  }
}

export default Contact;
