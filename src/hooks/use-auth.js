import { useAtom } from "jotai"
import { authUserAtom } from "../lib/atoms"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { authenticateUser, newAuthUser } from "../api/auth"

export default function useAuth() {
  const [data, setData] = useAtom(authUserAtom)
  const navigate = useNavigate()


  const signUp = async (name, username, email, password) => {
    const authData = await newAuthUser({ name, username, email, password })
    setData(authData)
    if (data) {
      navigate('/')
    }
  }

  const signIn = (email, password) => {
    const authData = authenticateUser({ email, password })
    setData(authData)
    if (data) {
      navigate('/')
    }
  }

  const signOut = () => {
    setData(null)
    navigate('/sign-in')
  }

  return { data, signIn, signOut, signUp }

};
