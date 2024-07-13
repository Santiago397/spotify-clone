import { useEffect, useState } from "react"
import Login from "./components/Login/Login"
import { getTokenFromUrl } from "./utils/spotify"

const App = () => {

  const [token, setToken] = useState(null)

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = ''
    const _token = hash.access_token

    if (_token) {
      setToken(_token)
    }
  }, [])
  

  return (
    <>
    {
      token ? (
        <h1>Logged</h1>
      ) : (
        <Login />
      )
    }
    </>
  )
}

export default App
