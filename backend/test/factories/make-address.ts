import { Address, type AddressProps } from '@/domain/entities/address'
import { faker } from '@faker-js/faker'

export const makeAddress = (address: Partial<AddressProps> = {}) => {
  return new Address({
    id: faker.string.uuid(),
    zipCode: faker.location.zipCode(),
    city: faker.location.city(),
    neighborhood: 'any_neighborhood',
    state: faker.location.state(),
    street: faker.location.street(),
    number: faker.location.buildingNumber(),
    ...address,
  })
}
