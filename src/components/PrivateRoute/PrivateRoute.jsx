import { Redirect, Route } from 'react-router-dom'
import { useUser } from '../../context/UserContext'

export default function PrivateRoute({children, ...routeProps}) {
    const { user } = useUser()

//spreading gives us access to magic props that come from react

    return (
        <>
           <Route
           {...routeProps}
           render={({ location }) => user ? children : <Redirect to={{ pathname: '/login', state: { from: location}} }
           /> 
        }
        />    
        </>
    )
}
