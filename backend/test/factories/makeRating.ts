import { Rating, RatingProps } from '../../src/domain/entities/Rating'
import { makeEmployer } from './makeEmployer'
import { makeWorker } from './makeWorker'

export const makeRating = (rating: Partial<RatingProps> = {}) => {
  return new Rating({
    comment: 'any_comment',
    employer: makeEmployer(),
    grade: 4,
    worker: makeWorker(),
    ...rating,
  })
}
