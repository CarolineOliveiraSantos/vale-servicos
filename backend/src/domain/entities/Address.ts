import { randomUUID } from 'node:crypto';

import { Replace } from '../helpers/Replace';

export interface AddressProps {
  id: string;
  cep: string;
  city: string;
  uf: string;
}
export class Address {
  private props: AddressProps;
  constructor({ id, ...props }: Replace<AddressProps, { id?: string }>) {
    this.props = {
      id: id || randomUUID(),
      ...props
    };
  }

  public get id() {
    return this.props.id;
  }

  public get city() {
    return this.props.city;
  }

  public set city(city: string) {
    this.props.city = city;
  }

  public get uf() {
    return this.props.uf;
  }

  public set uf(uf: string) {
    this.props.uf = uf;
  }

  public get cep() {
    return this.props.cep;
  }

  public set cep(cep: string) {
    this.props.cep = cep;
  }
}
