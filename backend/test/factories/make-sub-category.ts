import {
  SubCategory,
  SubCategoryProps,
} from '../../src/app/entities/sub-category'
import { makeCategory } from './make-category'
import { makeImage } from './make-image'

export const makeSubCategory = (
  subCategory: Partial<SubCategoryProps> = {},
) => {
  return new SubCategory({
    image: makeImage(),
    name: 'any_name',
    category: makeCategory(),
    ...subCategory,
  })
}
