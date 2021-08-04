import { injectStringInArray, replaceWithBrTag } from './reactHelpers'

describe(replaceWithBrTag.name, () => {
  describe('No text', () => {
    it(`should be ""`, () => {
      expect(replaceWithBrTag('')).toStrictEqual([''])
    })
  })
  describe('Single line text', () => {
    it(`should be "aaa"`, () => {
      expect(replaceWithBrTag('aaa')).toStrictEqual(['aaa'])
    })
  })
  describe('Multiple line text(\\n)', () => {
    it(`should be ["aaa", <br/>, "bbb"]`, () => {
      expect(replaceWithBrTag('aaa\nbbb')).toStrictEqual([
        'aaa',
        <br key={1} />,
        'bbb',
      ])
    })
  })
  describe('Multiple line text(``)', () => {
    it(`should be ["aaa", <br/>, "bbb"]`, () => {
      expect(
        replaceWithBrTag(`aaa
bbb`)
      ).toStrictEqual(['aaa', <br key={1} />, 'bbb'])
    })
  })
})

describe(injectStringInArray.name, () => {
  describe('Array length 0', () => {
    it(`should be []`, () => {
      expect(injectStringInArray([], '/')).toStrictEqual([])
    })
  })
  describe('Array length 1', () => {
    it(`should be ["a"]`, () => {
      expect(injectStringInArray(['a'], '/')).toStrictEqual(['a'])
    })
  })
  describe('Array length 2', () => {
    it(`should be ['a', <span>/</span>, 'b']`, () => {
      expect(injectStringInArray(['a', 'b'], '/')).toStrictEqual([
        'a',
        '/',
        'b',
      ])
    })
  })
  describe('Array length 2 with JSX.Element2', () => {
    it(`should be [<span>a</span>, <span>/</span>, <span>b</span>, <span>/</span>, <span>c</span>]`, () => {
      expect(
        injectStringInArray(
          [
            <span key={0}>a</span>,
            <span key={1}>b</span>,
            <span key={2}>c</span>,
          ],
          '/'
        )
      ).toStrictEqual([
        <span key={0}>a</span>,
        '/',
        <span key={1}>b</span>,
        '/',
        <span key={2}>c</span>,
      ])
    })
  })
})
