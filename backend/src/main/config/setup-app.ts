import express from 'express'

import { cors } from '../middlewares/cors'
import { jsonParser } from '../middlewares/json-parser'
export const setupApp = async () => {
  const app = express()
  app.use(jsonParser)
  app.use(cors)
  return { app }
}
