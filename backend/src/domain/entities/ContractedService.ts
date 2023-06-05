import { randomUUID } from 'node:crypto'

import { Replace } from '../helpers/Replace'
import { Contractor } from './Contractor'
import { Rating } from './Rating'
import { Service } from './Service'

export interface ContractedServiceProps {
  id: string
  service: Service
  contractor: Contractor
  rating: Rating
}
export class ContractedService {
  private props: ContractedServiceProps
  constructor({
    id,
    ...props
  }: Replace<ContractedServiceProps, { id?: string }>) {
    this.props = {
      id: id || randomUUID(),
      ...props,
    }
  }

  public get id() {
    return this.props.id
  }

  public get contractor() {
    return this.props.contractor
  }

  public set contractor(contractor: Contractor) {
    this.props.contractor = contractor
  }

  public get service() {
    return this.props.service
  }

  public set service(service: Service) {
    this.props.service = service
  }

  public get rating() {
    return this.props.rating
  }

  public set rating(rating: Rating) {
    this.props.rating = rating
  }
}
