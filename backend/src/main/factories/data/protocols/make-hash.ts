import { BcryptAdapter } from '@/infra/encrypt/bcrypt-adapter'

export const makeHash = () => new BcryptAdapter(12)
