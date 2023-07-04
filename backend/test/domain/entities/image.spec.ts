import { Image } from '@/domain/entities/image'
import { makeImage } from '@/test/factories/make-image'

describe('Image', () => {
  it('should be able create Image', () => {
    expect(makeImage()).toBeInstanceOf(Image)
  })
})
