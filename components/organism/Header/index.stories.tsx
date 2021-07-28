import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Component from '.'

export default {
  title: `organism/${Component.name}`,
  component: Component,
  argTypes: {
    space: {
      control: { type: 'range', min: 0, max: 500, step: 5 },
      defaultValue: 200,
    },
  },
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = args => (
  <Component {...args} />
)

export const SampleButton = Template.bind({})
SampleButton.args = {
  space: 200,
}
