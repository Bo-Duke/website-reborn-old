import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import logo from './logo.svg'

const appLogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
const AppLogo = styled.img`
  height: 80px;
  animation: ${appLogoSpin} infinite 20s linear;
`
const AppHeader = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`
const AppWrap = styled.div`
  text-align: center;
`
const AppTitle = styled.h1`
  font-size: 1.5em;
`
const AppIntro = styled.p`
  font-size: large;
`

class App extends Component {
  render() {
    return (
      <AppWrap>
        <AppHeader>
          <AppLogo src={logo} alt="logo" />
          <AppTitle>Welcome to React</AppTitle>
        </AppHeader>
        <AppIntro>
          To get started, edit <code>src/App.js</code> and save to reload.
        </AppIntro>
      </AppWrap>
    )
  }
}

export default App
