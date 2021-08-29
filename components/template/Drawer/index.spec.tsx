import { mountWithTheme } from '@test/TestWrapper'
import React from 'react'
import Component from '.'

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
