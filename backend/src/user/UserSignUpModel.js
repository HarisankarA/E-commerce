import mongoose from "mongoose";

const userSignUpModel = mongoose.Schema(
    {
        username : {
            type : String,
            unique : true,
            require : true
        },
        email : {
            type : String,
            unique : true,
            require : true
        },
        password : {
            type : String,
            require : true
        },
        profilePic : String
    },{
    
        timestamps : true 
    }
)

export const UserData = mongoose.model('User', userSignUpModel)

// const RefreshTokenSchema = mongoose.Schema(
//     {
//         refresh_token: {
//             type: String,
//             required: true
//         }
//     }
// )

// export const RefreshToken = mongoose.model('RefreshToken', RefreshTokenSchema)