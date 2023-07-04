import { Contractor } from 'src/app/entities/contractor'

import { AddressViewModel } from './address-view-model'
import { PhoneViewModel } from './phone-view-model'

export class ContractorViewModel {
  static toHTTP(contractor: Contractor) {
    return {
      id: contractor.id,
      email: contractor.email,
      firstName: contractor.firstName,
      lastName: contractor.lastName,
      socialSecurityNumber: contractor.socialSecurityNumber,
      createdAt: contractor.createdAt,
      updatedAt: contractor.updatedAt,
      address: contractor.address?.map(AddressViewModel.toHTTP),
      phone: contractor.phone ? PhoneViewModel.toHTTP(contractor.phone) : null,
    }
  }
}
