import { randomUUID } from 'node:crypto';

import { Replace } from '../helpers/Replace';
import { Image } from './Image';

export interface ServiceProps {
  id: string;
  name: string;
  info: string;
  image: Image;
}
export class Service {
  private props: ServiceProps;
  constructor({ id, ...props }: Replace<ServiceProps, { id?: string }>) {
    this.props = {
      id: id || randomUUID(),
      ...props
    };
  }

  public get id() {
    return this.props.id;
  }

  public get name() {
    return this.props.name;
  }

  public set name(name: string) {
    this.props.name = name;
  }

  public get info() {
    return this.props.info;
  }

  public set info(info: string) {
    this.props.info = info;
  }

  public get image() {
    return this.props.image;
  }

  public set image(image: Image) {
    this.props.image = image;
  }
}
