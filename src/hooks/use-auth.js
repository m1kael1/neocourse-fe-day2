import { useAtom } from "jotai"
import { authUserAtom } from "../lib/atoms"
import { useNavigate } from "react-router-dom"
import { authenticateUser, newAuthUser } from "../api/auth"

export default function useAuth() {
  const [data, setData] = useAtom(authUserAtom)
  const navigate = useNavigate()


  const signUp = async (name, username, email, password) => {
    await newAuthUser({ name, username, email, password })
    navigate('/sign-in')
  }

  const signIn = (email, password) => {
    const authData = authenticateUser({ email, password })
    setData(authData)
  }

  const signOut = () => {
    setData(null)
  }

  return { data, signIn, signOut, signUp }

};
