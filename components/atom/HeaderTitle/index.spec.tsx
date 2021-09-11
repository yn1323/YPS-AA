import React from 'react'
import Component from '.'
import { mountWithTheme } from '@test/TestWrapper'

describe(`${Component.name}`, () => {
  test(`${Component.name}-snapshot`, () => {
    const wrapper = mountWithTheme(<Component isLoggedIn={false} />)
    expect(wrapper).toMatchSnapshot()
    wrapper.setProps({ isLoggedIn: true })
    expect(wrapper).toMatchSnapshot()
  })
})
