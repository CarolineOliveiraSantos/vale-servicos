import { Request, Response } from 'express'

import { HttpRequest } from '../../interfaces/http/http-request'
import { Controller } from '../../interfaces/presentation/controller/controller'

export class ExpressRouterAdapter {
  static adapter(controller: Controller) {
    return async (request: Request, response: Response) => {
      const httpRequest: HttpRequest = {
        body: request.body,
        params: request.params,
        query: request.query,
      }
      const httpResponse = await controller.handle(httpRequest)
      response.status(httpResponse.statusCode).json(httpResponse.body)
    }
  }
}
