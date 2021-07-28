import React from 'react'
import renderer from 'react-test-renderer'
import TestWrapper from '@test/TestWrapper'
import Component from '.'

test(`${Component.name}-1`, () => {
  const component = renderer.create(
    <TestWrapper>
      <Component space={200} />
    </TestWrapper>
  )
  const tree = component.toJSON()

  expect(tree).toMatchSnapshot()
})

test(`${Component.name}-2`, () => {
  const component = renderer.create(
    <TestWrapper>
      <Component />
    </TestWrapper>
  )
  const tree = component.toJSON()

  expect(tree).toMatchSnapshot()
})
