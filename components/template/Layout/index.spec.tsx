import React from 'react'
import Component from '.'
import { mountWithTheme } from '@test/TestWrapper'

test(`${Component.name}-snapshot`, () => {
  const wrapper = mountWithTheme(
    <Component>
      <div>hoge</div>
    </Component>
  )
  expect(wrapper).toMatchSnapshot()
})
