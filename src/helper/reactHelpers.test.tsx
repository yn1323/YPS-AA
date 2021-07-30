import { replaceWithBrTag } from './reactHelpers'

describe(replaceWithBrTag.name, () => {
  describe('No text', () => {
    it('should be ""', () => {
      expect(replaceWithBrTag('')).toStrictEqual([''])
    })
  })
  describe('Single line text', () => {
    it('should be "aaa"', () => {
      expect(replaceWithBrTag('aaa')).toStrictEqual(['aaa'])
    })
  })
  describe('Multiple line text(\\n)', () => {
    it('should be ["aaa", <br/>, "bbb"]', () => {
      expect(replaceWithBrTag('aaa\nbbb')).toStrictEqual([
        'aaa',
        <br key={1} />,
        'bbb',
      ])
    })
  })
  describe('Multiple line text(``)', () => {
    it('should be ["aaa", <br/>, "bbb"]', () => {
      expect(
        replaceWithBrTag(`aaa
bbb`)
      ).toStrictEqual(['aaa', <br key={1} />, 'bbb'])
    })
  })
})
