import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Component from '.'

export default {
  title: `atom/${Component.name}`,
  component: Component,
  argTypes: {
    children: { control: 'text' },
  },
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = args => (
  <Component {...args} />
)

export const HeaderTitle = Template.bind({})

HeaderTitle.args = {
  children: 'タイトルDayo!',
}
