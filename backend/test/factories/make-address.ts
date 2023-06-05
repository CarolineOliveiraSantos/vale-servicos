import { faker } from '@faker-js/faker'

import { Address, AddressProps } from '../../src/app/entities/address'

export const makeAddress = (address: Partial<AddressProps> = {}) => {
  return new Address({
    zipCode: faker.location.zipCode(),
    city: faker.location.city(),
    neighborhood: 'any_neighborhood',
    state: faker.location.state(),
    street: faker.location.street(),
    stateNumber: faker.location.buildingNumber(),
    ...address,
  })
}
