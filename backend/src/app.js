import express from 'express'
import cors from 'cors'
import router from './routes.js'

const app = express()

app.use(cors())
app.use(express.json())

// Chama as rotas
app.use(router)

export default app
