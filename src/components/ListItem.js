import React from 'react'
import styled from 'styled-components'

import {nameToColor} from 'src/utils/color'

const ListItem = props => {
  const onClick = () => {
    props.onClick(props.user.name)
  }

  return (
    <Wrapper className="wrapper" onClick={onClick}>
      <Icon style={{backgroundColor: nameToColor(props.user.name)}}>
        {props.user.initials}
      </Icon>

      <Info>
        <Title>{props.user.name}</Title>
        {props.user.email && <Email>{props.user.email}</Email>}
      </Info>
    </Wrapper>
  )
}

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 50px;
  width: 50px;

  font-family: sans-serif;
  font-weight: bold;

  color: #fff;

  border-radius: 7px;
`

const Info = styled.div`
  margin-left: 2rem;
`

const Wrapper = styled.li`
  display: flex;
  align-items: center;

  padding: 1rem;
  background: #fff;

  border-bottom: 1px solid #ccc;

  :hover {
    background: #f4faf8;
  }

  transition: 120ms ease-in-out;
`

const Title = styled.p`
  font-family: sans-serif;
  font-size: 1.25rem;
  margin: 0;

  .wrapper:hover & {
    color: #42c481;
  }

  transition: 120ms ease-in-out;
`

const Email = styled.p`
  font-family: sans-serif;
  font-size: 1rem;
  margin: 0;

  color: #888;
`

export default ListItem
