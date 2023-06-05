import { Rating, RatingProps } from '../../src/domain/entities/Rating'

export const makeRating = (rating: Partial<RatingProps> = {}) => {
  return new Rating({
    comment: 'any_comment',
    grade: 4,
    ...rating,
  })
}
