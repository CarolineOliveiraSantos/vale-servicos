import { Category, CategoryProps } from '@/domain/entities/category'
import { makeImage } from './make-image'
import { faker } from '@faker-js/faker'

export const makeCategory = (category: Partial<CategoryProps> = {}) => {
  return new Category({
    id: faker.string.uuid(),
    image: makeImage(),
    name: 'any_name',
    ...category,
  })
}
