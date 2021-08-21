import { render } from 'enzyme'
import React from 'react'
import { act } from 'react-test-renderer'
import Component from '.'
import TestWrapper from '@test/TestWrapper'

test(Component.name, async () => {
  let component
  await act(async () => {
    component = await render(
      <TestWrapper>
        <Component isLoggedIn />
      </TestWrapper>
    )
  })
  expect(component).toMatchSnapshot()
  let component2
  await act(async () => {
    component2 = await render(
      <TestWrapper>
        <Component isLoggedIn={false} />
      </TestWrapper>
    )
  })
  expect(component2).toMatchSnapshot()
})
