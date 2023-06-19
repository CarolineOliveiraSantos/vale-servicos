export class ContractorAlreadyExists extends Error {
  constructor() {
    super('Contractor already exists')
    this.name = 'ContractorAlreadyExists'
  }
}
