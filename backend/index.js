import cors from 'cors'
import express from 'express'
import siswaRoute from './routes/siswa.route.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/siswa', siswaRoute)

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
