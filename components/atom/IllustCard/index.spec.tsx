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
          grayIsOnRight={true}
          imageUri="/images/storyset/schedule.svg"
          text="sampletext"
          size={220}
        />
      </TestWrapper>
    )
  })
  expect(component).toMatchSnapshot()
  await act(async () => {
    component = await render(
      <TestWrapper>
        <Component
          grayIsOnRight={false}
          imageUri="/images/storyset/schedule.svg"
          text="sampletext"
        />
      </TestWrapper>
    )
  })
  expect(component).toMatchSnapshot()
})
