import { mountWithTheme } from '@test/TestWrapper'
import React from 'react'
import Component from '.'

test(`${Component.name}-snapshot`, () => {
  const wrapper = mountWithTheme(<Component />)
  expect(wrapper).toMatchSnapshot()
})
