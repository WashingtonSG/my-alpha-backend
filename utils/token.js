const jwt = require('jsonwebtoken')
const { EXPIRE_IN_JWT_ACCESS_TOKEN, SECRET_JWT_ACCESS_TOKEN } = require('./constants')

async function generateTokenJwt (payload) {
  return jwt.sign(payload, SECRET_JWT_ACCESS_TOKEN, { expiresIn: EXPIRE_IN_JWT_ACCESS_TOKEN })
}

async function decodeTokenJwt (token) {
  return jwt.verify(token, SECRET_JWT_ACCESS_TOKEN)
}

module.exports = {
  generateTokenJwt,
  decodeTokenJwt
}
