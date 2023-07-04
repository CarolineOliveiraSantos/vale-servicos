import { Category } from 'src/app/entities/category'
import { makeCategory } from '@/test/factories/make-category'

describe('Category', () => {
  it('should be able create Category', () => {
    expect(makeCategory()).toBeInstanceOf(Category)
  })
})
