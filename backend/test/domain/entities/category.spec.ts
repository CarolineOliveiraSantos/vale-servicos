import { Category } from '@/domain/entities/category'
import { makeCategory } from '@/test/factories/make-category'

describe('Category', () => {
  it('should be able create Category', () => {
    expect(makeCategory()).toBeInstanceOf(Category)
  })
})
