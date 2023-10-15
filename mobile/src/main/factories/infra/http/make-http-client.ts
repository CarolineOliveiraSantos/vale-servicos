import { AxiosAdapter } from '@/infra/http/axios-adapter'

export const MakeHttpClient = () => new AxiosAdapter()
