export interface PhoneProps {
  countryCode: string
  regionCode: string
  phoneNumber: string
}
export class Phone {
  private props: PhoneProps
  constructor(props: PhoneProps) {
    this.props = props
  }

  public get countryCode() {
    return this.props.countryCode
  }

  public set countryCode(countryCode: string) {
    this.props.countryCode = countryCode
  }

  public get regionCode() {
    return this.props.regionCode
  }

  public set regionCode(regionCode: string) {
    this.props.regionCode = regionCode
  }

  public get phoneNumber() {
    return this.props.phoneNumber
  }

  public set phoneNumber(phoneNumber: string) {
    this.props.phoneNumber = phoneNumber
  }
}
