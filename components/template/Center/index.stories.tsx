import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
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
