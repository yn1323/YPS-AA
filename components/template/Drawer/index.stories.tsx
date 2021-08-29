import React, { useEffect } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Component from '.'
import { useRecoilState } from 'recoil'
import { drawerState } from '@recoil/drawer'

export default {
  title: `template/${Component.name}`,
  component: Component,
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = args => {
  return (
    <Component {...args}>
      <div>children</div>
    </Component>
  )
}

export const Drawer = Template.bind({})
Drawer.args = {
  open: true,
  setOpen: () => {
    console.log('open')
  },
}