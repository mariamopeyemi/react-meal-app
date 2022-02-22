import React from 'react';
import styled from 'styled-components';


const Input = (props) => {
  return (
    <InputTag>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </InputTag>
  )
}

export default Input

const InputTag =styled.input`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;

> label {
  font-weight: bold;
  margin-right: 1rem;
}

> input {
  width: 3rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  font: inherit;
  padding-left: 0.5rem;
}

`