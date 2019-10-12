import React from 'react'
import styled from 'styled-components'

const Input = props => {
  return <TextInput onChange={props.onChange} value={props.value} />
}

const TextInput = styled.input`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0.5rem;
`

export default Input
