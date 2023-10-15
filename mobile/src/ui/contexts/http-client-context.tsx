import { type HttpClient } from '@/data/protocols/http/http-client'
import { AxiosAdapter } from '@/infra/http/axios-adapter'
import { type FC, type ReactNode, createContext } from 'react'

export interface HttpClientContextProps {
  httpClient: HttpClient
}
export const HttpClientContext = createContext<HttpClientContextProps>(
  {} as HttpClientContextProps,
)
export interface IHttpClientProvider {
  children: ReactNode
}
export const HttpClientProvider: FC<IHttpClientProvider> = ({ children }) => {
  const axiosAdapter = new AxiosAdapter()
  return (
    <HttpClientContext.Provider
      value={{
        httpClient: axiosAdapter,
      }}
    >
      {children}
    </HttpClientContext.Provider>
  )
}
