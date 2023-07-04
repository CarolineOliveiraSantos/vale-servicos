import { Express, Router } from 'express'
import { readdirSync, stat } from 'fs'
import { resolve } from 'path'

export const setupRoutes = async (app: Express) => {
  const router = Router()
  app.use('/api', router)
  const filenames = readdirSync(resolve(__dirname, '..', 'routes'))
  for (const files of filenames) {
    const route = await import(`../routes/${files}`)
    route.default(router)
  }
}
