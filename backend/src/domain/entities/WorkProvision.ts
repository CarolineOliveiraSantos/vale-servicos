import { randomUUID } from 'node:crypto'

import { Replace } from '../helpers/Replace'
import { Image } from './Image'
import { Service } from './Service'
import { Worker } from './Worker'

export interface WorkProvisionProps {
  id: string
  service: Service
  image: Image
  description: string
  worker: Worker
  createdAt: Date
  updatedAt: Date
}
export class WorkProvision {
  private props: WorkProvisionProps
  constructor({
    createdAt,
    id,
    updatedAt,
    ...props
  }: Replace<
    WorkProvisionProps,
    { id?: string; createdAt?: Date; updatedAt?: Date }
  >) {
    this.props = {
      createdAt: createdAt || new Date(),
      id: id || randomUUID(),
      updatedAt: updatedAt || new Date(),
      ...props,
    }
  }

  public get id() {
    return this.props.id
  }

  public get service() {
    return this.props.service
  }

  public set service(service: Service) {
    this.props.service = service
  }

  public get image() {
    return this.props.image
  }

  public set image(image: Image) {
    this.props.image = image
  }

  public get description() {
    return this.props.description
  }

  public set description(description: string) {
    this.props.description = description
  }

  public get worker() {
    return this.props.worker
  }

  public set worker(worker: Worker) {
    this.props.worker = worker
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
}
