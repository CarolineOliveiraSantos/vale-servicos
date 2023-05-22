import { Address, AddressProps } from '../../src/domain/entities/Address';

export const makeAddress = (address: Partial<AddressProps> = {}) => {
  return new Address({
    cep: 'any_cep',
    city: 'any_city',
    neighborhood: 'any_neighborhood',
    state: 'any_state',
    street: 'any_state',
    ...address
  });
};
