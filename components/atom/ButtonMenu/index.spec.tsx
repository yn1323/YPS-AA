import { Delete } from '@material-ui/icons'
import { mountWithTheme } from '@test/TestWrapper'
import React from 'react'
import Component from '.'

test(`${Component.name}-snapshot`, () => {
  const wrapper = mountWithTheme(
    <Component icon={<Delete />} clickHandler={() => console.log('OK')}>
      LABEL
    </Component>
  )
  expect(wrapper).toMatchSnapshot()
  wrapper.setProps({
    icon: <Delete />,
    clickHandler: () => console.log('OK'),
    showArrowDown: false,
  })
  expect(wrapper).toMatchSnapshot()
})
