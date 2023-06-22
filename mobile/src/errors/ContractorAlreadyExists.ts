export class ContractorAlreadyExists extends Error {
  constructor() {
    super('Usuário já existe')
    this.name = 'ContractorAlreadyExists'
  }
}
