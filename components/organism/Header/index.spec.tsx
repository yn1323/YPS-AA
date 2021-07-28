import React from 'react'
import renderer from 'react-test-renderer'
import TestWrapper from '@test/TestWrapper'
import Component from '.'

test(Component.name, () => {
  const component = renderer.create(
    <TestWrapper>
      <Component space={200} />
    </TestWrapper>
  )
  const tree = component.toJSON()

  expect(tree).toMatchSnapshot()
})
