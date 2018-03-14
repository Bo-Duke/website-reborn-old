import React, { Component } from 'react'
import styled from 'styled-components'
import Card from '../Components/Card'
import MarkdownRenderer from '../Components/MarkdownRenderer'
import Banner from '../Components/Banner'
import data from '../data/data.fr.yml'

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
        <Banner />
        <Card>
          <h1>{data.name}</h1>
          <p>{data.bio.long}</p>
        </Card>
      </Wrapper>
    )
  }
}

export default App
