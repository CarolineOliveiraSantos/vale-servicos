import { type ContractorDto } from '../dtos/ContractorDto'

export class ContractorModel {
  constructor(private readonly contractorDto: ContractorDto) {}

  public get id() {
    return this.contractorDto.id
  }

  public get email() {
    return this.contractorDto.email
  }

  public get firstName() {
    return this.contractorDto.firstName
  }

  public get lastName() {
    return this.contractorDto.lastName
  }

  public get createdAt() {
    return new Date(this.contractorDto.createdAt)
  }

  public get updatedAt() {
    return new Date(this.contractorDto.updatedAt)
  }

  public get phone() {
    return this.contractorDto.phone
  }
}
