import { type HttpStatus } from '@/helpers/http/http-status'

export class Exception extends Error {
  statusCode: HttpStatus
}
