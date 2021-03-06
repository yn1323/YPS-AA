import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Component from '.'
import { FOOTER_LINKS } from '@constant'

export default {
  title: `organism/${Component.name}`,
  component: Component,
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = args => (
  <Component {...args} />
)

export const SlashLink = Template.bind({})
SlashLink.args = {
  links: FOOTER_LINKS,
}
