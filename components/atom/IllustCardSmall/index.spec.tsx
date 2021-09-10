import React from 'react'
import Component from '.'
import { mountWithTheme } from '@test/TestWrapper'

test(`${Component.name}-snapshot`, () => {
  const wrapper = mountWithTheme(
    <Component imageUri="/images/functionalIcon1.png" text="sampletext" />
  )
  expect(wrapper).toMatchSnapshot()
  wrapper.setProps({ isGray: true })
  expect(wrapper).toMatchSnapshot()
})
