import React from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'

const StyledMarkdown = styled(ReactMarkdown)`
  font-family: -apple-system, sans-serif;
  color: ${props => props.theme.text.regular};
  & a {
    text-decoration: none;
    color: ${props => props.theme.text.link};
  }
  & a:visited {
    color: ${props => props.theme.text.linkVisited};
  }
`

const MarkdownRenderer = props => {
  return <StyledMarkdown source={props.source} />
}

StyledMarkdown.defaultProps = {
  theme: {
    text: {
      regular: '#000000',
      link: '#0074d9',
      linkVisited: '#b10dc9',
    },
  },
}

export default MarkdownRenderer
