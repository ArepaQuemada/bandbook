import { useRouter } from 'next/router'

/**
 * Entry point
 * Will redirect if a user it's logged
 */
export default function Home() {
  const router = useRouter()
  if (process.browser) {
    const token = window.localStorage.getItem("token")
    if (token) {
      router.replace("/dashboard")
      return null
    }
    router.replace("/login")
  }
  return null
}
