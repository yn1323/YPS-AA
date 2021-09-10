import React from 'react'
import Component from '.'
import { mountWithTheme } from '@test/TestWrapper'

test(`${Component.name}-snapshot`, () => {
  const wrapper = mountWithTheme(
    <Component open={true} setOpen={() => console.log('ok')}>
      <div>hoge</div>
    </Component>
  )
  expect(wrapper).toMatchSnapshot()
  wrapper.setProps({ open: false })
  expect(wrapper).toMatchSnapshot()
})
