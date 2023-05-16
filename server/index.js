require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000
const mahasiswaController = require('../app/controllers/mahasiswaController')

app.use(express.json())
app.use(cors())
// Routing
app.get('/api/v1/mahasiswa', mahasiswaController.getAll)
app.get('/api/v1/mahasiswa/:id', mahasiswaController.getById)
app.post('/api/v1/mahasiswa', mahasiswaController.createData)
app.put('/api/v1/mahasiswa/:id', mahasiswaController.updateData)
app.delete('/api/v1/mahasiswa/:id', mahasiswaController.deleteData)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})