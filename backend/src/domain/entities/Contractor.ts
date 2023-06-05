import { randomUUID } from 'node:crypto'

import { Replace } from '../helpers/Replace'
import { Address } from './Address'
import { Phone } from './Phone'

export interface ContractorProps {
  id: string
  firstName: string
  lastName: string
  socialSecurityNumber?: string
  email?: string
  password?: string
  phone?: Phone
  address?: Address[]
  createdAt: Date
  updatedAt: Date
}
export class Contractor {
  private props: ContractorProps
  constructor({
    id,
    createdAt,
    updatedAt,
    ...props
  }: Replace<
    ContractorProps,
    { id?: string; createdAt?: Date; updatedAt?: Date }
  >) {
    this.props = {
      id: id || randomUUID(),
      createdAt: createdAt || new Date(),
      updatedAt: updatedAt || new Date(),
      ...props,
    }
  }

  public get id() {
    return this.props.id
  }

  public get socialSecurityNumber() {
    return this.props.socialSecurityNumber
  }

  public set socialSecurityNumber(socialSecurityNumber: string | undefined) {
    this.props.socialSecurityNumber = socialSecurityNumber
  }

  public get firstName() {
    return this.props.firstName
  }

  public set firstName(firstName: string) {
    this.props.firstName = firstName
  }

  public get lastName() {
    return this.props.lastName
  }

  public set lastName(lastName: string) {
    this.props.lastName = lastName
  }

  public get email() {
    return this.props.email
  }

  public set email(email: string | undefined) {
    this.props.email = email
  }

  public get password() {
    return this.props.password
  }

  public set password(password: string | undefined) {
    this.props.password = password
  }

  public get phone() {
    return this.props.phone
  }

  public set phone(phone: Phone | undefined) {
    this.props.phone = phone
  }

  public get address() {
    return this.props.address
  }

  public set address(address: Address[] | undefined) {
    this.props.address = address
  }

  public get createdAt() {
    return this.props.createdAt
  }

  public get updatedAt() {
    return this.props.updatedAt
  }

  public set updatedAt(updatedAt: Date) {
    this.props.updatedAt = updatedAt
  }

  public get fullName() {
    return this.firstName + ' ' + this.lastName
  }
}
