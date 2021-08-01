import TestWrapper from '@test/TestWrapper'
import { render } from 'enzyme'
import React from 'react'
import { act } from 'react-test-renderer'
import Component from '.'

test(Component.name, async () => {
  let component
  await act(async () => {
    component = await render(
      <TestWrapper>
        <Component
          isGray
          imageUri="/images/functionalIcon1.png"
          text="sampletext"
        />
      </TestWrapper>
    )
  })
  expect(component).toMatchSnapshot()
  await act(async () => {
    component = await render(
      <TestWrapper>
        <Component imageUri="/images/functionalIcon1.png" text="sampletext" />
      </TestWrapper>
    )
  })
  expect(component).toMatchSnapshot()
})
