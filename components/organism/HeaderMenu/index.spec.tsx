import { mountWithTheme } from '@test/TestWrapper'
import React from 'react'
import Component from '.'

test(`${Component.name}-snapshot`, () => {
  const wrapper = mountWithTheme(<Component />)
  expect(wrapper).toMatchSnapshot()
  wrapper.setProps({ isAdmin: true, showTimeCard: true })
  expect(wrapper).toMatchSnapshot()
})
