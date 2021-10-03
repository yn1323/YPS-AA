import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import Component from '.'

export default {
  title: `template/Layout/Center`,
  component: Component,
  argTypes: {
    children: { control: 'element' },
  },
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = args => (
  <Component>
    <div>CenterComponent</div>
  </Component>
)

export const Basic = Template.bind({})
