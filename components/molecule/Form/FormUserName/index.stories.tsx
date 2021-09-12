import { ComponentStory, ComponentMeta } from '@storybook/react'
import React, { useRef } from 'react'
import Component, { Props } from '.'

const COMPONENT_NAME = 'TexFormUserNametbox'

export default {
  title: `molecule/Form/${COMPONENT_NAME}`,
  component: Component,
  args: {
    error: false,
    defaultValue: '',
    required: false,
    helperText: '必ず入力してください。',
  } as Props,
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = args => {
  const ref = useRef<HTMLInputElement>(null)
  const clickHandler = () => {
    console.log(ref.current!.value)
  }

  return (
    <div>
      <Component {...args} ref={ref} />
      <button onClick={clickHandler}>get ref</button>
    </div>
  )
}

export const Basic = Template.bind({})
