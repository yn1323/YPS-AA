import React from 'react'
import Component from '.'
import { mountWithTheme } from '@test/TestWrapper'

describe(`${Component.name}`, () => {
  const component = mountWithTheme(<Component>Tooltip Note</Component>)
  test(`${Component.name}-snapshot`, () => {
    expect(component).toMatchSnapshot()
  })
})
