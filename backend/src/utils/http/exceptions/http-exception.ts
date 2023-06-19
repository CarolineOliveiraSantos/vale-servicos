import { HttpStatusCode } from '@/helpers/http/http-status-code'

export interface HttpExceptionProps {
  message: string | string[]
  error: string
  cause?: Error
}
export class HttpException extends Error {
  constructor(
    private readonly statusCode: HttpStatusCode,
    private readonly options: HttpExceptionProps,
  ) {
    super()
    this.name = 'HttpException'
  }

  public getStatusCode(): number {
    return this.statusCode
  }

  public getOptions() {
    return this.options
  }
}
