import { TokenGenerator } from './generateToken'

/**
 * Mocked data to test login
 */
const DB_MOCK = [
  {
    username: 'Test',
    password: 'Test123',
    id: 1,
  },
  {
    username: 'admin',
    password: 'admin123',
    id: 2,
  },
]

/**
 * Login api
 * @param req 
 * @param res 
 */
export default function login(req, res) {
  const { username, password } = JSON.parse(req.body)
  const user = DB_MOCK.find((u) => {
    return u.username === username && u.password === password
  })

  if (user) {
    const payload = {
      username: user.username,
      id: user.id,
    }
    const token = new TokenGenerator(payload).generateToken()
    return res.json({
      token,
      user: { ...payload },
    })
  }

  res.status(401).json({})
}
