import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import Component from '.'

export default {
  title: `atom/Image/Avatar`,
  component: Component,
  args: {
    url: '/static/images/avatar/1.jpg',
    alt: 'somebody',
    size: 'md',
  },
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = args => (
  <Component {...args} />
)

export const Basic = Template.bind({})
