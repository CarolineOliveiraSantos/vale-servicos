export interface AddressProps {
  id: string
  street: string
  neighborhood: string
  zipCode: string
  city: string
  state: string
  number: string
}
export class Address {
  private props: AddressProps
  constructor(props: AddressProps) {
    this.props = props
  }

  public get id() {
    return this.props.id
  }

  public get city() {
    return this.props.city
  }

  public set city(city: string) {
    this.props.city = city
  }

  public get state() {
    return this.props.state
  }

  public set state(state: string) {
    this.props.state = state
  }

  public get street() {
    return this.props.street
  }

  public set street(street: string) {
    this.props.street = street
  }

  public get neighborhood() {
    return this.props.neighborhood
  }

  public set neighborhood(neighborhood: string) {
    this.props.neighborhood = neighborhood
  }

  public get number() {
    return this.props.number
  }

  public set number(number: string) {
    this.props.number = number
  }

  public get zipCode() {
    return this.props.zipCode
  }

  public set zipCode(zipCode: string) {
    this.props.zipCode = zipCode
  }
}
