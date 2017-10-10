import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import backgrounds from '@storybook/addon-backgrounds'

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
  .addDecorator(
    backgrounds([
      { name: 'twitter', value: '#00aced', default: true },
      { name: 'facebook', value: '#3b5998' },
    ]),
  )
  .add('blank and simple', () => <Card />)

storiesOf('Parallax', module).add('Demo', () => <ParallaxDemo />)
