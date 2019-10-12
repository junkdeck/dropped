import React from 'react'
import styled from 'styled-components'

const ListItem = props => {
  return (
    <Wrapper>
      <Title>{props.user.name}</Title>
      {props.user.email && <Email>{props.user.email}</Email>}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 1rem;
  background: #fff;

  :hover {
    background: #eee;
  }
`

const Title = styled.p`
  font-family: sans-serif;
  font-size: 1.25rem;
`

const Email = styled.p`
  font-family: sans-serif;
  font-size: 1rem;
`

export default ListItem
