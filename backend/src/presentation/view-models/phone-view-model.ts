import { Phone } from '@/domain/entities/phone'

export class PhoneViewModel {
  static toHTTP(phone: Phone) {
    return {
      countryCode: phone.countryCode,
      phoneNumber: phone.phoneNumber,
      regionCode: phone.regionCode,
    }
  }
}
