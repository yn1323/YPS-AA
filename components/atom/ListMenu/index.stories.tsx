import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Component from '.'
import { COMMON_MENU } from '@constant/layout/menus'

export default {
  title: `atom/${Component.name}`,
  component: Component,
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = args => (
  <Component {...args} />
)

export const ListMenu = Template.bind({})
ListMenu.args = {
  items: COMMON_MENU[1].items,
  delimeterPosition: [1],
}
