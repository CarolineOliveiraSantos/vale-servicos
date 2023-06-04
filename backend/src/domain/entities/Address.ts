import { randomUUID } from 'node:crypto'

import { Replace } from '../helpers/Replace'

export interface AddressProps {
  id: string
  street: string
  neighborhood: string
  cep: string
  city: string
  state: string
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

  public get cep() {
    return this.props.cep
  }

  public set cep(cep: string) {
    this.props.cep = cep
  }
}
