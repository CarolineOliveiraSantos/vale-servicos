import { PrismaClient } from '@prisma/client'

export class PrismaService extends PrismaClient {
  private static _instance: PrismaService | null = null
  private constructor() {
    super({ log: ['info'] })
  }
  static getInstance(): PrismaService {
    if (!this._instance) {
      this._instance = new PrismaService()
      return this._instance
    }
    return this._instance
  }
}
