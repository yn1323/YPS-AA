import React from 'react'
import Component, { TextButton } from '.'
import { mountWithTheme } from '@test/TestWrapper'

test(`${Component.name}-snapshot`, () => {
  const wrapper = mountWithTheme(<Component />)
  expect(wrapper).toMatchSnapshot()
})

test(`${Component.name}-event`, () => {
  const component = mountWithTheme(<Component />)
  component.find(TextButton).map(button => button.simulate('click'))
})
