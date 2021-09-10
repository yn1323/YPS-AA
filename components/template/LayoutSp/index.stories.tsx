import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import Component from '.'

export default {
  title: `template/${Component.name}`,
  component: Component,
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = args => (
  <Component {...args}>
    <div>children</div>
  </Component>
)

export const LayoutSp = Template.bind({})
