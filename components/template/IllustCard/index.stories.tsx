import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Component from '.'

export default {
  title: `template/${Component.name}`,
  component: Component,
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = args => (
  <Component {...args} />
)

export const IllustCardRight = Template.bind({})
IllustCardRight.args = {
  grayIsOnRight: true,
  imageUri: '/images/storyset/schedule.svg',
  text: `tetete
dasda`,
  size: 220,
}

export const IllustCardLeft = Template.bind({})
IllustCardLeft.args = {
  grayIsOnRight: false,
  imageUri: '/images/storyset/cheff.svg',
  text: '1',
}
