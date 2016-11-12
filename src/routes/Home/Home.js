import React from 'react'
import styled from 'styled-components'

const Heading = styled.h1`
  font-weight: bold;
  text-align: center;
`

const SubHeading = styled.h3``

const Home = () => (
  <div>
    <Heading>React starter</Heading>
    <SubHeading>with</SubHeading>
    <ul>
      <li>flow</li>
      <li>redux (configured for redux devtools)</li>
      <li>react-router</li>
      <li>styled-components</li>
      <li>react-bootstrap (and bootstrap)</li>
    </ul>
  </div>
)

export default Home