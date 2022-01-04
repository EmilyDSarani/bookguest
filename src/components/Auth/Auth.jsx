import { useHistory, useLocation } from 'react-router-dom'
import { useUser } from '../../context/UserContext'

import { useLocation } from "react-router"

export default function Auth() {
    const { user, setUser } = useUser()
    const history = useHistory()
    const location = useLocation()
    const auth = useUser();
    
    

    const { from } = location.state || {from: { pathname: '/'} };




    return (
        <>
        <fieldset>
        <legend>Sign In</legend>
        <form>
          <label htmlFor="username" >
            Username
          </label>
          <input
            id="username"
            type="text"
            name="username"
            required
          />
          <label htmlFor="password" >
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            required
          />
          <button
            type="submit"
          >
            Sign In
          </button>
        </form>
        <p>Error message goes here</p>
      </fieldset>
      </>
    )
}
