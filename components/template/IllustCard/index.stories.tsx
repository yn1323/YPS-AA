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

export const IllustCard1 = Template.bind({})
IllustCard1.args = {
  grayIsOnRight: true,
  imageUri: '/images/storyset/schedule.svg',
  text: `tetete
dasda`,
  size: 220,
}

export const IllustCard2 = Template.bind({})
IllustCard2.args = {
  grayIsOnRight: false,
  imageUri: '/images/storyset/cheff.svg',
  text: '1',
}

export const IllustCard3 = Template.bind({})
IllustCard3.args = {
  grayIsOnRight: true,
  imageUri: '/images/storyset/mobile.svg',
  text: '1',
}
