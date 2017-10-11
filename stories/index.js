import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import backgrounds from '@storybook/addon-backgrounds'
import centered from '@storybook/addon-centered'

// Components
import Card from '../src/Components/Card'
import MarkdownRenderer from '../src/Components/MarkdownRenderer'
// Demos
import App from '../src/App'
import ParallaxDemo from '../src/ParallaxDemo'

import { Button } from '@storybook/react/demo'

const markdown = `
## Readme

This project was **bootstrapped** with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some *information* on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
`

storiesOf('Components', module)
  .addDecorator(centered)
  .addDecorator(
    backgrounds([
      {
        name: 'blue hue',
        value: 'linear-gradient(135deg, #ABDCFF 10%, #0396FF 100%)',
        default: true,
      },
      {
        name: 'red hue',
        value: 'linear-gradient(135deg, #FEB692 10%, #EA5455 100%)',
      },
      {
        name: 'purple hue',
        value: 'linear-gradient(135deg, #CE9FFC 10%, #7367F0 100%)',
      },
      {
        name: 'white',
        value: '#ffffff',
      },
    ]),
  )
  .add('Card', () => <Card>Testing</Card>)
  .add('Markdown', () => <MarkdownRenderer source={markdown} />)

storiesOf('Demos', module).add('Parallax', () => <ParallaxDemo />)
