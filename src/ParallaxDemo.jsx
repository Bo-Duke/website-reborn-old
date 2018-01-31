import React, { Component } from 'react'
import Parallax from 'react-springy-parallax'

export default class ParallaxDemo extends Component {
  render() {
    return (
      <Parallax pages={2}>
        <Parallax.Layer
          offset={0}
          speed={1}
          style={{ backgroundColor: '#243B4A' }}
        >
          <h1>test</h1>
          <h2>Start editing to see some magic happen {'\u2728'}</h2>
        </Parallax.Layer>
        <Parallax.Layer
          offset={1}
          speed={1}
          style={{ backgroundColor: '#BADA55' }}
        />
        <Parallax.Layer
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          offset={0}
          speed={0.5}
        >
          Testy-test
        </Parallax.Layer>
      </Parallax>
    )
  }
}
