import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import Component from '.'

export default {
  title: `molecule/Summary/SummaryBase`,
  component: Component,
  args: {
    children: [<div key={0}>header</div>, <div key={1}>body</div>],
  },
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = args => (
  <Component {...args} />
)

export const Basic = Template.bind({})
