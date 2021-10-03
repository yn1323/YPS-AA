import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import Component from '.'
import { COMMON_MENU } from '@constant/layout/menus'

export default {
  title: `atom/${Component.name}`,
  component: Component,
  args: {
    items: COMMON_MENU[1].items,
    delimeterPosition: [1],
  },
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = args => (
  <Component {...args} />
)

export const Basic = Template.bind({})
