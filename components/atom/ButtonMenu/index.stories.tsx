import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Component from '.'
import { Delete } from '@material-ui/icons'

export default {
  title: `atom/${Component.name}`,
  component: Component,
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = args => (
  <Component {...args}>LABEL</Component>
)

export const MenuButton = Template.bind({})
MenuButton.args = {
  icon: <Delete />,
  clickHandler: () => console.log('clicked'),
  showArrowDown: true,
}
