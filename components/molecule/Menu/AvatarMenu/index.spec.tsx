import React from 'react'
import stories from './index.stories'
import Component, { TextButton } from '.'
import { mountWithTheme } from '@test/TestWrapper'

describe(`${stories.title}`, () => {
  const component = mountWithTheme(<Component />)
  test(`${stories.title}-snapshot`, () => {
    expect(component).toMatchSnapshot()
  })
  test(`${stories.title}-event`, () => {
    component.find(TextButton).map(button => button.simulate('click'))
  })
})
