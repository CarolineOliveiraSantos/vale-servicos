import { setupApp } from '@/main/config/setup-app'
import type { Express } from 'express'
import request from 'supertest'
let app: Express
describe('Json Parser', () => {
  beforeEach(async () => {
    const appSetup = await setupApp()
    app = appSetup.app
  })
  it('should parser body', async () => {
    app.get('/any_request', (_, res) => {
      res.status(200).json({ name: 'any_name' })
    })
    const response = await request(app)
      .get('/any_request')
      .expect('Content-Type', /json/)

    expect(response.body).toEqual({ name: 'any_name' })
  })
})
