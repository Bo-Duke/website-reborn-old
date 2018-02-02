import React, { Component } from 'react'
import styled from 'styled-components'
import Card from '../Components/Card'
import MarkdownRenderer from '../Components/MarkdownRenderer'

const Wrapper = styled.div`
  background-color: #dddddd;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding-top: 15px;
`

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Card>Test</Card>
        <MarkdownRenderer source={'# test'} />
      </Wrapper>
    )
  }
}

export default App
