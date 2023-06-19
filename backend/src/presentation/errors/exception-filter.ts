import { ResponseEntity } from '@/helpers/http/response-entity'
import { HttpResponse } from '@/interfaces/http/http-response'
import { HttpException } from '@/utils/http/exceptions/http-exception'

export class ExceptionFilter {
  public static handle(error: any): HttpResponse {
    if (error instanceof HttpException) {
      return ResponseEntity.customError(error.getStatusCode(), {
        error: error.getOptions().error,
        message: error.getOptions().message,
      })
    }
    return ResponseEntity.serverError()
  }
}
