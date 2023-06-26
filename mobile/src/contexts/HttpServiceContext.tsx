import { AxiosAdapter } from '@/infra/http/AxiosAdapter'
import { HttpService } from '@/interfaces/http/HttpService'
import { FC, ReactNode, createContext } from 'react'

export type HttpServiceContextProps = {
  httpService: HttpService
}
export const HttpServiceContext = createContext<HttpServiceContextProps>(
  {} as HttpServiceContextProps,
)
export interface IHttpServiceProvider {
  children: ReactNode
}
export const HttpServiceProvider: FC<IHttpServiceProvider> = ({ children }) => {
  const axiosAdapter = new AxiosAdapter()

  return (
    <HttpServiceContext.Provider
      value={{
        httpService: axiosAdapter,
      }}
    >
      {children}
    </HttpServiceContext.Provider>
  )
}
