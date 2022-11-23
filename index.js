// import statement itu simpen paling atas

// karena menggunakan .env variable, jd lakuin import ini di awal aplikasi jalan
require('dotenv').config()

const express = require('express')
// menggunakan logger morgan
const morgan = require('morgan')
// import routing
// const router = require('./config/routes')

const cors = require('cors')
// error handler
// const errorHandler = require('./middlewares/errorHandler')
// const ApiError = require('./utils/ApiError')
// const httpStatus = require('http-status')

const port = process.env.PORT
// inisialisasi setelah import statement
const app = express()
// basic express configurasi
app.locals.moment = require('moment')
// Middleware to Parse JSON
app.use(express.json())
app.use(cors())
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended:false }))

app.use(morgan('dev'))
// app.use(router)

// middleware for page not found
// app.use((req, res, next) => {
//     next(new ApiError(httpStatus.NOT_FOUND, `Cannot Find EndPoint ${req.originalUrl} On This App ....`))
// })
// use middleware errorHandler
// app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server running on ${Date(Date.now)}`)
    console.log(`Server listening on PORT: ${port}`)
})