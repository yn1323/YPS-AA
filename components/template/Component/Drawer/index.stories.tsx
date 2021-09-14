import { ComponentStory, ComponentMeta } from '@storybook/react'
import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import Component from '.'
import { drawerState } from '@recoil/drawer'

export default {
  title: `template/Component/Drawer`,
  component: Component,
  args: {
    open: true,
    setOpen: () => {
      console.log('open')
    },
  },
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = args => {
  return (
    <Component {...args}>
      <div>children</div>
    </Component>
  )
}

export const Basic = Template.bind({})
