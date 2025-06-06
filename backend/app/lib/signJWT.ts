import jwt from 'jsonwebtoken'
import { env } from './env'

export const signJWT = (userId: any)=>{
    return jwt.sign({userId}, env.JWT_SECRET, {expiresIn: '3000h'})
}