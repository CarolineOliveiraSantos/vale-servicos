import { randomUUID } from 'node:crypto';

import { Replace } from '../helpers/Replace';
import { Image } from './Image';

export interface DomesticServiceProps {
  id: string;
  name: string;
  image: Image;
}
export class DomesticService {
  private props: DomesticServiceProps;
  constructor({
    id,
    ...props
  }: Replace<DomesticServiceProps, { id?: string }>) {
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
