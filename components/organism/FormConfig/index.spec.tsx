import React from 'react'
import Component from '.'
import { mountWithTheme } from '@test/TestWrapper'

describe(`${Component.name}`, () => {
  test(`${Component.name}-snapshot`, () => {
    const wrapper = mountWithTheme(<Component />)
    expect(wrapper).toMatchSnapshot()
    wrapper.setProps({ isLoggedIn: true })
    expect(wrapper).toMatchSnapshot()
    wrapper.setProps({ initialLogin: true })
    expect(wrapper).toMatchSnapshot()
  })
})
