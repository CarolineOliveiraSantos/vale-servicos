import express from 'express'

import { cors } from '../middlewares/cors'
import { jsonParser } from '../middlewares/json-parser'
import { setupRoutes } from './setup-routes'
export const setupApp = async () => {
  const app = express()
  app.use(jsonParser)
  app.use(cors)
  setupRoutes(app)
  return { app }
}
