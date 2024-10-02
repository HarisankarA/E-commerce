import express, { request, response } from 'express'
import { UserData } from './UserSignUpModel.js'

const UserSignUpRouter = express.Router()

UserSignUpRouter.post('/create/', async(request, response)=> {

    const all_user = await UserData.find({})

    const {username} = request.body

    const user_check = all_user.find(user => user.username === username)

    console.log(request.body)

    if (user_check === undefined) {

        const new_user = new User(request.body)

        await new_user.save()

        response.json("User Created")
    }
    else {
        response.json("User name already existed")
    }

})

export default UserSignUpRouter