import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Component from '.'
import { ADMIN_MENU, TIMECARD } from '@constant/layout/menus'

export default {
  title: `molecule/${Component.name}`,
  component: Component,
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = args => (
  <Component {...args}>LABEL</Component>
)

export const NoMenu = Template.bind({})
NoMenu.args = {
  ...TIMECARD[0],
}

export const HasMenu = Template.bind({})
HasMenu.args = {
  ...ADMIN_MENU[0],
}
