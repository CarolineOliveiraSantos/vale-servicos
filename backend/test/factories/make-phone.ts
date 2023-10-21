import { Phone, type PhoneProps } from '@/domain/entities/phone'
import { faker } from '@faker-js/faker'

export const makePhone = (phone: Partial<PhoneProps> = {}) => {
  return new Phone({
    countryCode: faker.phone.number(),
    phoneNumber: faker.phone.number(),
    regionCode: '99',
    ...phone,
  })
}
