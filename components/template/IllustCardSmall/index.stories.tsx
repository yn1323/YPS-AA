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

export const IllustCardSmall1 = Template.bind({})
IllustCardSmall1.args = {
  isGray: true,
  imageUri: '/images/storyset/schedule.svg',
  text: `tetetedasda`,
}

export const IllustCardSmall2 = Template.bind({})
IllustCardSmall2.args = {
  isGray: false,
  imageUri: '/images/storyset/cheff.svg',
  text: '1',
}
