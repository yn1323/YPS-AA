import React from 'react'
import Component from '.'
import { mountWithTheme } from '@test/TestWrapper'

test(`${Component.name}-snapshot`, () => {
  const wrapper = mountWithTheme(<Component type="sub">Heading</Component>)
  expect(wrapper).toMatchSnapshot()
  wrapper.setProps({ showUnderline: true })
  expect(wrapper).toMatchSnapshot()
})
