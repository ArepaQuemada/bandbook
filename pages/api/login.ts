import { TokenGenerator } from "./generateToken"

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

export default function login(req, res) {
  const { username, password } = JSON.parse(req.body)
  const user = DB_MOCK.find((u) => {
    return u.username === username && u.password === password
  })

  if (user) {
    const payload = {
      username: user.username,
      id: user.id
    }
    const token = new TokenGenerator(payload).generateToken()
    return res.json({
      token
    })
  }

  res.status(401).json({})
}
