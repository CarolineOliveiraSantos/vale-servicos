import { makeRating } from '../../../test/factories/makeRating';
import { Rating } from './Rating';

describe('Rating', () => {
  it('should be able create Rating', () => {
    expect(makeRating()).toBeInstanceOf(Rating);
  });
});
