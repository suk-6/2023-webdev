import jwt from 'jsonwebtoken'
import config from 'config'

const privateKey = config.get('jwt.privateKey');
const publicKey = config.get('jwt.publicKey');

export const signJwt = () => {
    return jwt.sign()
}

export const verifyJwt = () => {
    return jwt.verify()
}
