import React from 'react'
import stories from './index.stories'
import Component from '.'
import { mountWithTheme } from '@test/TestWrapper'

test(`${stories.title}-snapshot`, () => {
  const wrapper = mountWithTheme(<Component />)
  expect(wrapper).toMatchSnapshot()
})
