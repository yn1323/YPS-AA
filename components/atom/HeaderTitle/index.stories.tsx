import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import Component from '.'

export default {
  title: `atom/${Component.name}`,
  component: Component,
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = args => (
  <Component {...args} />
)

export const HeaderTitle = Template.bind({})

HeaderTitle.args = {
  isLoggedIn: true,
  children: 'タイトルDayo!',
}
