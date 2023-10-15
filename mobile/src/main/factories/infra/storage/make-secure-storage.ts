import { SecureStorageAdapter } from '@/infra/storage/SecureStorageAdapter'

export const MakeSecureStorage = () => new SecureStorageAdapter()
