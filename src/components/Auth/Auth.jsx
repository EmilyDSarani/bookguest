import { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useUser } from '../../context/UserContext'
import { authForm } from '../../hooks/authForm'


export default function Auth() {
   
    const history = useHistory();
    const location = useLocation();
    const auth = useUser();
    const { formState, handleFormChange } = authForm({email:'', password:''});
    const [error, setError] = useState(null);

    const { from } = location.state || {from: { pathname: '/'} };

    const handleLogin =(e)=>{
        e.preventDefault();
        const successfulLogin = auth.login(formState.email, formState.password);

        return !successfulLogin 
        ? setError('Where For Art Thou Email or Password?') 
        : history.replace(from)
    }


    return (
        <>
        <fieldset>
        <legend>Sign In</legend>
        <form onSubmit={handleLogin}>
          <label htmlFor="email" >
            Email
          </label>
          <input
            id="email"
            type="text"
            name="email"
            value={formState.email}
            onChange={handleFormChange}
          />{' '}
          <label htmlFor="password" >
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            value={formState.password}
            onChange={handleFormChange}
          />
          <button
            type="submit"
          >
            Sign In
          </button>
        </form>
        {error && <h4>{error}</h4>}
      </fieldset>
      </>
    )
}
