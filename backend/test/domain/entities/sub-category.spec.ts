import { SubCategory } from '@/domain/entities/sub-category'
import { makeSubCategory } from '@/test/factories/make-sub-category'

describe('SubCategory', () => {
  it('should be able create SubCategory', () => {
    expect(makeSubCategory()).toBeInstanceOf(SubCategory)
  })
})
