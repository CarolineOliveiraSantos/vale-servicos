import { Image, ImageProps } from '../../src/domain/entities/Image';

export const makeImage = (image: Partial<ImageProps> = {}) => {
  return new Image({
    key: 'any_key',
    name: 'any_name',
    url: 'any_url',
    ...image
  });
};
