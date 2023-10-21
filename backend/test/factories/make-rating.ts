import { Rating, type RatingProps } from '@/domain/entities/rating'

export const makeRating = (rating: Partial<RatingProps> = {}) => {
  return new Rating({
    comment: 'any_comment',
    grade: 4,
    ...rating,
  })
}
