import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import Component from '.'
import { FOOTER_LINKS } from '@constant/common'

export default {
  title: `atom/Text/SlashLink`,
  component: Component,
  args: {
    links: FOOTER_LINKS,
  },
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = args => (
  <Component {...args} />
)

export const Basic = Template.bind({})
