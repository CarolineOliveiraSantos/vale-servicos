import { GenerateUUIDAdapter } from '@/infra/gateways/uuid/generate-uuid-adapter'

const makeSut = () => {
  const sut = new GenerateUUIDAdapter()
  return { sut }
}
describe('GenerateUUID', () => {
  it('should return uuid if success', async () => {
    const { sut } = makeSut()
    await expect(sut.randomUUID()).resolves.toBeTruthy()
  })
})
