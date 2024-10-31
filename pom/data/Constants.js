import dotenv from "dotenv";
dotenv.config()

export const URLS ={
    BASE_URL: process.env.BASE_URL
}

export const CREDENTIALS={
    VALID: {
        USERNAME:process.env.USERNAME,
        PASSWORD:process.env.PASSWORD
    },
    INVALID:{
        USERNAME:'invalid_user',
        PASSWORD:'invalid_pass'
    }
}