import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import Component from '.'

export default {
  title: `molecule/Summary/WorkTime`,
  component: Component,
  args: {
    month: '11',
    name: 'neko',
    time: 25.5,
    imageUrl: 'imageUrl.jpg',
  },
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = args => (
  <Component {...args} />
)

export const Basic = Template.bind({})
