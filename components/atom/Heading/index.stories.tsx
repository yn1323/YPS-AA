import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import Component from '.'

export default {
  title: `atom/${Component.name}`,
  component: Component,
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = args => (
  <Component {...args}>Heading</Component>
)

export const Heading = Template.bind({})
Heading.args = {
  type: 'sub',
  showUnderline: true,
}
