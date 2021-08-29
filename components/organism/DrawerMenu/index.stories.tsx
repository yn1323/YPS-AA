import React, { useEffect } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Component from '.'
import { useSetRecoilState } from 'recoil'
import { drawerState } from '@recoil/drawer'

export default {
  title: `organism/${Component.name}`,
  component: Component,
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = args => {
  const setOpen = useSetRecoilState(drawerState)
  useEffect(() => {
    setOpen(true)
  }, [])

  return (
    <div>
      <Component {...args} />
      <button onClick={() => setOpen(true)}>Show Drawer</button>
    </div>
  )
}

export const LayoutSp = Template.bind({})
