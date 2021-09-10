import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import Component from '.'

export default {
  title: `molecule/${Component.name}`,
  component: Component,
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = args => (
  <Component {...args} />
)

export const Footer = Template.bind({})
