const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000

// allow semua origin : '*'
app.use(cors())
app.use(express.json()) // parsing semua request ke dalam json

// request -> '/' -> middleware -> inside function route
// request -> '/' -> inside function route
app.get('/', (request, response, next) => {
    response.json({ status: true, message: 'Simple Api Login!' })
})

app.get('/:name', (request, response, next) => {
    const { name } = request.params
    const { test } = request.query
    response.json({ status: true, message: `Welcome ${name}, test: ${test}` })
})

app.post('/api/login', (request, response, next) => {
    const { username, password } = request.body
    if (username != 'user123' && password != 'user123' ) {
        response.json({ status: false, message: 'Login Gagal!' })
    } 
    response.json({ token: 'token12345' })
})

app.listen(port, () => {
    console.log(`API Simple Login running on port ${port}`)
})