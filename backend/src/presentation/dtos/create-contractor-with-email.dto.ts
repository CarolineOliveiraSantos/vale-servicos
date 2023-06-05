import { IsNotEmpty, IsString } from 'class-validator'
export interface CreateContractorWithEmailDtoConstructor {
  firstName: string
  lastName: string
  email: string
  password: string
}
export class CreateContractorWithEmailDto {
  constructor({
    email,
    firstName,
    lastName,
    password,
  }: CreateContractorWithEmailDtoConstructor) {
    this.email = email
    this.firstName = firstName
    this.lastName = lastName
    this.password = password
  }

  @IsString()
  @IsNotEmpty()
  public firstName: string

  @IsString()
  @IsNotEmpty()
  public lastName: string

  @IsString()
  @IsNotEmpty()
  public email: string

  @IsString()
  @IsNotEmpty()
  public password: string
}
