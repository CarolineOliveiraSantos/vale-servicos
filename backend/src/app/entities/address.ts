import { randomUUID } from 'node:crypto'

import { Replace } from '../helpers/replace'

export interface AddressProps {
  id: string
  street: string
  neighborhood: string
  zipCode: string
  city: string
  state: string
  stateNumber: string
}
export class Address {
  private props: AddressProps
  constructor({ id, ...props }: Replace<AddressProps, { id?: string }>) {
    this.props = {
      id: id || randomUUID(),
      ...props,
    }
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

  public get stateNumber() {
    return this.props.stateNumber
  }

  public set stateNumber(stateNumber: string) {
    this.props.stateNumber = stateNumber
  }

  public get zipCode() {
    return this.props.zipCode
  }

  public set zipCode(zipCode: string) {
    this.props.zipCode = zipCode
  }
}
