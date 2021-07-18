import React from 'react'
import renderer from 'react-test-renderer'
import Component from '.'

test(Component.name, () => {
  const component = renderer.create(<Component />)
  const tree = component.toJSON()

  expect(tree).toMatchSnapshot()
})

// describe('Sample.ts Functions TestCases', () => {
//   it('should return the squared value', () => {
//     const result = square(2)
//     const expected = 4

//     expect(result).toStrictEqual(expected)
//   })
// })
