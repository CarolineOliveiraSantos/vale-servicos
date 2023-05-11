import { randomUUID } from 'node:crypto';

import { Replace } from '../helpers/Replace';

export interface ImageProps {
  id: string;
  name: string;
  url: string;
  key: string;
}
export class Image {
  private props: ImageProps;
  constructor({ id, ...props }: Replace<ImageProps, { id?: string }>) {
    this.props = {
      id: id || randomUUID(),
      ...props
    };
  }

  public get id() {
    return this.props.id;
  }

  public get url() {
    return this.props.url;
  }

  public get key() {
    return this.props.key;
  }

  public get name() {
    return this.props.name;
  }
}
