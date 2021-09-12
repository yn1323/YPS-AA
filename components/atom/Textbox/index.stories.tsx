import { ComponentStory, ComponentMeta } from '@storybook/react'
import React, { useRef } from 'react'
import Component, { Props } from '.'

export default {
  title: `atom/Textbox`,
  component: Component,
  args: {
    error: false,
    disabled: false,
    required: false,
    defaultValue: 'default',
    helperText: 'error',
    placeholder: 'placeholder',
    maxLength: 64,
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

export const Textbox = Template.bind({})
