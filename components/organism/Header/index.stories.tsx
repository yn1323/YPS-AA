import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Component from '.'

export default {
  title: `organism/${Component.name}`,
  component: Component,
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = args => (
  <Component {...args} />
)

export const HeaderTop = Template.bind({})
HeaderTop.args = {
  isLoggedIn: true,
  isInitialLogin: true,
}
export const HeaderLoggedIn = Template.bind({})
HeaderLoggedIn.args = {
  isLoggedIn: true,
  isInitialLogin: false,
}
export const HeaderInitialLogin = Template.bind({})
HeaderInitialLogin.args = {
  isLoggedIn: false,
  isInitialLogin: true,
}
