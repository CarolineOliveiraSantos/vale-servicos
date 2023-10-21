import { type GenerateUUID } from '@/domain/gateways/uuid/generate-uuid'
import { randomUUID } from 'node:crypto'

export class GenerateUUIDAdapter implements GenerateUUID {
  async randomUUID(): Promise<string> {
    return randomUUID()
  }
}
