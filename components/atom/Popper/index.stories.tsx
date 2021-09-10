import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import Component from '.'
import { COMMON_MENU } from '@constant/layout/menus'

export default {
  title: `atom/${Component.name}`,
  component: Component,
  argTypes: {
    placement: {
      control: {
        type: 'select',
        labels: {
          top: 'top',
          'top-start': 'top-start',
          'top-end': 'top-end',
          left: 'left',
          'left-start': 'left-start',
          'left-end': 'left-end',
          right: 'right',
          'right-start': 'right-start',
          'right-end': 'right-end',
          bottom: 'bottom',
          'bottom-start': 'bottom-start',
          'bottom-end': 'bottom-end',
        },
      },
    },
  },
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = args => (
  <Component {...args}>
    <div>Popper</div>
  </Component>
)

export const ListMenu = Template.bind({})
ListMenu.args = {
  show: true,
  setShow: () => {
    console.log('close')
  },
  anchorEl: document.getElementsByTagName('body')[0],
  placement: 'bottom-start',
  timeout: 200,
}
