import { makeImage } from '../../../test/factories/makeImage';
import { Image } from './Image';

describe('Image', () => {
  it('should be able create Image', () => {
    expect(makeImage()).toBeInstanceOf(Image);
  });
});
