import { makeSubCategory } from '../../../test/factories/makeSubCategory'
import { SubCategory } from './SubCategory'

describe('SubCategory', () => {
  it('should be able create SubCategory', () => {
    expect(makeSubCategory()).toBeInstanceOf(SubCategory)
  })
})
