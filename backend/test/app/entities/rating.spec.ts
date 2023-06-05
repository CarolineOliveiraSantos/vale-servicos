import { Rating } from '@/app/entities/rating'
import { makeRating } from '@/test/factories/make-rating'

describe('Rating', () => {
  it('should be able create Rating', () => {
    expect(makeRating()).toBeInstanceOf(Rating)
  })
})
