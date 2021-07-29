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
        <Component space={200} />
      </TestWrapper>
    )
  })

  expect(component).toMatchSnapshot()

  await act(async () => {
    component = await render(
      <TestWrapper>
        <Component />
      </TestWrapper>
    )
  })

  expect(component).toMatchSnapshot()
})
