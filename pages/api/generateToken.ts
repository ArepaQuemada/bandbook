import jwt from 'jsonwebtoken'

export class TokenGenerator {
  private payload: Record<string, unknown>

  constructor(payload: Record<string, unknown>) {
    this.payload = payload
  }

  generateToken() {
    const token = jwt.sign(this.payload, process.env.SECRET_KEY, {
      expiresIn: 31556926,
    })
    return token
  }
}
