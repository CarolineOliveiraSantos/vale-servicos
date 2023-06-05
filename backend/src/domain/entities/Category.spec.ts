import { makeCategory } from '../../../test/factories/makeCategory'
import { Category } from './Category'

describe('Category', () => {
  it('should be able create Category', () => {
    expect(makeCategory()).toBeInstanceOf(Category)
  })
})
