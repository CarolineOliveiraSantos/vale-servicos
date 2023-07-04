export interface RatingProps {
  grade: number
  comment: string
}
export class Rating {
  private props: RatingProps
  constructor(props: RatingProps) {
    this.props = props
  }

  public get grade() {
    return this.props.grade
  }

  public set grade(grade: number) {
    this.props.grade = grade
  }

  public get comment() {
    return this.props.comment
  }

  public set comment(comment: string) {
    this.props.comment = comment
  }
}
