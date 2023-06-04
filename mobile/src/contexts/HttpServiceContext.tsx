import { HttpServiceAdapter } from '@/infra/HttpServiceAdapter'
import { HttpService } from '@/interfaces/HttpService'
import { FC, ReactNode, createContext } from 'react'

export type IHttpServiceContext = {
  httpService: HttpService
}
export const HttpServiceContext = createContext<IHttpServiceContext>(
  {} as IHttpServiceContext,
)
export interface IHttpServiceProvider {
  children: ReactNode
}
export const HttpServiceProvider: FC<IHttpServiceProvider> = ({ children }) => {
  const httpServiceAdapter = new HttpServiceAdapter()

  return (
    <HttpServiceContext.Provider
      value={{
        httpService: httpServiceAdapter,
      }}
    >
      {children}
    </HttpServiceContext.Provider>
  )
}
