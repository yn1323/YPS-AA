import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import Component from '.'

export default {
  title: `atom/Image/IllustCardSmall`,
  component: Component,
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = args => (
  <Component {...args} />
)

export const BackgroundWhite = Template.bind({})
BackgroundWhite.args = {
  isGray: false,
  imageUri: '/images/functionalIcon1.png',
  text: `tetetedasda`,
}

export const BackgroundGray = Template.bind({})
BackgroundGray.args = {
  isGray: true,
  imageUri: '/images/functionalIcon2.png',
  text: '1',
}
