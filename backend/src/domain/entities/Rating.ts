import { randomUUID } from 'crypto';

import { Replace } from '../helpers/Replace';
import { Employer } from './Employer';
import { Worker } from './Worker';

export interface RatingProps {
  id: string;
  grade: number;
  worker: Worker;
  employer: Employer;
  comment: string;
  createdAt: Date;
  updatedAt: Date;
}
export class Rating {
  private props: RatingProps;
  constructor({
    createdAt,
    updatedAt,
    id,
    ...props
  }: Replace<
    RatingProps,
    { id?: string; createdAt?: Date; updatedAt?: Date }
  >) {
    this.props = {
      createdAt: createdAt || new Date(),
      updatedAt: updatedAt || new Date(),
      id: id || randomUUID(),
      ...props
    };
  }

  public get id() {
    return this.props.id;
  }

  public get grade() {
    return this.props.grade;
  }

  public set grade(grade: number) {
    this.props.grade = grade;
  }

  public get comment() {
    return this.props.comment;
  }

  public set comment(comment: string) {
    this.props.comment = comment;
  }

  public get worker() {
    return this.props.worker;
  }

  public set worker(worker: Worker) {
    this.props.worker = worker;
  }

  public get employer() {
    return this.props.employer;
  }

  public set employer(employer: Employer) {
    this.props.employer = employer;
  }

  public get createdAt() {
    return this.props.createdAt;
  }

  public get updatedAt() {
    return this.props.updatedAt;
  }

  public set updatedAt(updatedAt: Date) {
    this.props.updatedAt = updatedAt;
  }
}
