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
const Template2: ComponentStory<typeof Component> = args => (
  <div style={{ width: '400px' }}>
    <Component {...args} />
  </div>
)

export const PC = Template.bind({})
export const SP = Template2.bind({})
