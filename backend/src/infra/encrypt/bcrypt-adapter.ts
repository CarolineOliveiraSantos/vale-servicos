import { Hash } from '@/data/protocols/encrypt/hash'
import { HashCompare } from '@/data/protocols/encrypt/hash-compare'
import { compare, hash } from 'bcrypt'
export class BcryptAdapter implements Hash, HashCompare {
  constructor(private readonly salt: number) {}
  async compare(hash: string, text: string): Promise<boolean> {
    return await compare(text, hash)
  }

  async hash(text: string): Promise<string> {
    return await hash(text, this.salt)
  }
}
