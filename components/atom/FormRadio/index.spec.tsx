import React from 'react'
import { Args1 } from './index.stories'
import Component from '.'
import { mountWithTheme } from '@test/TestWrapper'

describe(`${Component.name}`, () => {
  const component = mountWithTheme(<Component {...Args1} />)
  test(`${Component.name}-snapshot`, () => {
    expect(component).toMatchSnapshot()
  })
})
