import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Component from '.'

export default {
  title: `template/${Component.name}`,
  component: Component,
  argTypes: {
    children: { control: 'element' },
  },
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = args => (
  <Component {...args} />
)

export const Centering = Template.bind({})
Centering.args = {
  children: <div>CenterComponent</div>,
}
