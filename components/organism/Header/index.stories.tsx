import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Component from '.'

export default {
  title: `organism/${Component.name}`,
  component: Component,
  argTypes: {
    space: {
      control: { type: 'range', min: 0, max: 500, step: 5 },
      defaultValue: 140,
    },
  },
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = args => (
  <Component {...args} />
)

export const Header = Template.bind({})
Header.args = {
  space: 140,
}
