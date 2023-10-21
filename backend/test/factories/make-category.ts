import { Category, type CategoryProps } from '@/domain/entities/category'
import { faker } from '@faker-js/faker'

import { makeImage } from './make-image'

export const makeCategory = (category: Partial<CategoryProps> = {}) => {
  return new Category({
    id: faker.string.uuid(),
    image: makeImage(),
    name: 'any_name',
    ...category,
  })
}
