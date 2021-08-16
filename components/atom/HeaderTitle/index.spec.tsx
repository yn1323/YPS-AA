import { render } from 'enzyme'
import React from 'react'
import { act } from 'react-test-renderer'
import Component from '.'

test(Component.name, async () => {
  let component
  await act(async () => {
    component = await render(<Component />)
  })

  expect(component).toMatchSnapshot()
})
