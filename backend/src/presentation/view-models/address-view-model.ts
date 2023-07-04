import { Address } from '@/domain/entities/address'

export class AddressViewModel {
  static toHTTP(address: Address) {
    return {
      id: address.id,
      city: address.city,
      neighborhood: address.neighborhood,
      state: address.state,
      stateNumber: address.stateNumber,
      street: address.street,
      zipCode: address.zipCode,
    }
  }
}
