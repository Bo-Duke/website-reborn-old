import React from 'react'
import styled from 'styled-components'

const StyledBanner = styled.div`
  background-image: url(http://bouveronmaxi.me/img/wall1.jpg);
  position: absolute;
  background-position: right bottom;
  background-size: cover;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 300px;
  top: 0;
  z-index: 0;
`

const Banner = props => {
  return <StyledBanner />
}

export default Banner
