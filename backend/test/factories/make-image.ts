import { Image, type ImageProps } from '@/domain/entities/image'
import { faker } from '@faker-js/faker'

export const makeImage = (image: Partial<ImageProps> = {}) => {
  return new Image({
    id: faker.string.uuid(),
    key: 'any_key',
    url: 'any_url',
    ...image,
  })
}
