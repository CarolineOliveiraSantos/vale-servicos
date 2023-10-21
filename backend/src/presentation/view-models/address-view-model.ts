import { type Address } from '@/domain/entities/address'
export class AddressViewModel {
  static toHTTP(address: Address) {
    return {
      id: address.id,
      city: address.city,
      neighborhood: address.neighborhood,
      state: address.state,
      number: address.number,
      street: address.street,
      zipCode: address.zipCode,
    }
  }
}
export type AddressViewModelHttpDto = ReturnType<typeof AddressViewModel.toHTTP>
