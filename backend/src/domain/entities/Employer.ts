import { randomUUID } from 'node:crypto'

import { Replace } from '../helpers/Replace'
import { Address } from './Address'

export interface EmployerProps {
  id: string
  cpf?: string
  firstName: string
  lastName: string
  email: string
  password: string
  telephone: string
  address: Address
  createdAt: Date
  updatedAt: Date
}
export class Employer {
  private props: EmployerProps
  constructor({
    id,
    createdAt,
    updatedAt,
    ...props
  }: Replace<
    EmployerProps,
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

  public get cpf() {
    return this.props.cpf
  }

  public set cpf(cpf: string | undefined) {
    this.props.cpf = cpf
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

  public set email(email: string) {
    this.props.email = email
  }

  public get password() {
    return this.props.password
  }

  public set password(password: string) {
    this.props.password = password
  }

  public get telephone() {
    return this.props.telephone
  }

  public set telephone(telephone: string) {
    this.props.telephone = telephone
  }

  public get address() {
    return this.props.address
  }

  public set address(address: Address) {
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
