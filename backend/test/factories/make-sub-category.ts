import {
  SubCategory,
  type SubCategoryProps,
} from '@/domain/entities/sub-category'
import { faker } from '@faker-js/faker'

import { makeCategory } from './make-category'
import { makeImage } from './make-image'

export const makeSubCategory = (
  subCategory: Partial<SubCategoryProps> = {},
) => {
  return new SubCategory({
    id: faker.string.uuid(),
    image: makeImage(),
    name: 'any_name',
    category: makeCategory(),
    ...subCategory,
  })
}
