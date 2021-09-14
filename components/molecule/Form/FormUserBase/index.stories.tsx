import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import Component, { Props } from '.'

export default {
  title: `molecule/Form/UserBase`,
  component: Component,
  args: {
    definition: 'User type',
    item: <div>aaa</div>,
  } as Props,
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = args => (
  <Component {...args} />
)

export const Basic = Template.bind({})
