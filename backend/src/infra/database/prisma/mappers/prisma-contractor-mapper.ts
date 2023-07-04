import { Contractor } from 'src/app/entities/contractor'
import { Phone } from 'src/app/entities/phone'
import { Contractor as RawContractor } from '@prisma/client'
export class PrismaContractorMapper {
  static toPrisma(contractor: Contractor): RawContractor {
    return {
      id: contractor.id,
      lastName: contractor.lastName,
      email: contractor.email || null,
      firstName: contractor.firstName,
      password: contractor.password || null,
      socialSecurityNumber: contractor.socialSecurityNumber || null,
      phoneCountryCode: contractor.phone?.countryCode || null,
      phoneNumber: contractor.phone?.phoneNumber || null,
      phoneRegionCode: contractor.phone?.regionCode || null,
      createdAt: contractor.createdAt,
      updatedAt: contractor.updatedAt,
    }
  }

  static toDomain(rawContractor: RawContractor): Contractor {
    return new Contractor({
      firstName: rawContractor.firstName,
      lastName: rawContractor.lastName,
      address: [],
      createdAt: rawContractor.createdAt,
      email: rawContractor.email || undefined,
      id: rawContractor.id,
      password: rawContractor.password || undefined,
      phone:
        rawContractor.phoneNumber &&
        rawContractor.phoneCountryCode &&
        rawContractor.phoneRegionCode
          ? new Phone({
              countryCode: rawContractor.phoneCountryCode,
              phoneNumber: rawContractor.phoneNumber,
              regionCode: rawContractor.phoneRegionCode,
            })
          : undefined,
      socialSecurityNumber: rawContractor.socialSecurityNumber || undefined,
      updatedAt: rawContractor.updatedAt,
    })
  }
}
