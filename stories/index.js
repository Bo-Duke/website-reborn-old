import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import backgrounds from '@storybook/addon-backgrounds'
import centered from '@storybook/addon-centered'

import App from '../src/App'
import Card from '../src/Components/Card'
import ParallaxDemo from '../src/ParallaxDemo'

import { Button } from '@storybook/react/demo'

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ))

storiesOf('Card', module)
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
    ]),
  )
  .add('blank and simple', () => <Card>Testing</Card>)

storiesOf('Parallax', module).add('Demo', () => <ParallaxDemo />)
