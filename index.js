import dotenv from 'dotenv'
import expressAsyncError from 'express-async-errors'
import express from 'express'
import sendEmail from './controller/sendEmail.js'

dotenv.config()
const app = express()

// error handler
import notFoundMiddlewere from './middleware/notFound.js'
import errorHandlerMiddlewere from './middleware/errorHandler.js'

app.use(express.json())

//routes:

app.get('/', (req, res) => {
    res.send('<h1>Email Project<h1> <a href="/send">Send Email</a>')

})

app.get('/send', sendEmail)

app.use(notFoundMiddlewere)
app.use(errorHandlerMiddlewere)

const port = process.env.PORT || 3000

const start = async () => {
    try {
        app.listen(port, () => console.log(`Server is listening on port ${port}`))
    } catch (error) {
        console.log(error)
    }
}
start()
