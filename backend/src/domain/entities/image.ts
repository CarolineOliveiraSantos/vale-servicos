export interface ImageProps {
  id: string
  url: string
  key: string
}
export class Image {
  private props: ImageProps
  constructor(props: ImageProps) {
    this.props = props
  }

  public get id() {
    return this.props.id
  }

  public get url() {
    return this.props.url
  }

  public get key() {
    return this.props.key
  }
}
