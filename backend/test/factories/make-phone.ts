import { faker } from '@faker-js/faker'

import { Phone, PhoneProps } from '@/domain/entities/phone'

export const makePhone = (phone: Partial<PhoneProps> = {}) => {
  return new Phone({
    countryCode: faker.phone.number(),
    phoneNumber: faker.phone.number(),
    regionCode: '99',
    ...phone,
  })
}
