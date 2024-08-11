import { config } from 'dotenv'
import express, { json, urlencoded } from 'express'
import {set, connect } from 'mongoose'


const server = express()
server.use(json())
server.use(urlencoded({extended: true}))
config()
set('strictQuery', false)




const port = process.env.PORT || 3000
const mongoose_connection = process.env.MONGO_DB

const start = async () => {

    try {
        await connect(mongoose_connection,console.log('Connected to MongoDB'))
        server.listen(port, () => {
            console.log(`Listening on port ${port}`)
        })
    } catch (error) {
        console.error('Error starting the server:', error)
        process.exit(1)  // Exit the process with an error code
    }
}
start()