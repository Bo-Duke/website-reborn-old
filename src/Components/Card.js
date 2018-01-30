import React from 'react'
import styled from 'styled-components'

const StyledCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 200px;

  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: box-shadow 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  color: ${props => props.theme.text.regular};
  background-color: ${props => props.theme.card.background};
`
const Card = props => <StyledCard>{props.children}</StyledCard>

StyledCard.defaultProps = {
  theme: {
    card: {
      background: '#ffffff',
    },
    text: {
      regular: '#000000',
    },
  },
}

export default Card
