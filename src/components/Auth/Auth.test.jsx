import { render } from '@testing-library/react';
import Auth from './Auth'
import Home from '../../views/Home/Home'
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import { UserProvider } from '../../context/UserContext';
import { MemoryRouter, Route, Switch } from 'react-router';




it('should pull up the Guestbook', async () =>{
    const { container } = render(
        <UserProvider>
            <MemoryRouter initialEntries={["/login"]}>
                <Switch>
                <Route exact path ="/login">
                    <Auth />
                </Route>
                <PrivateRoute exact path= "/">
                    <Home />
                </PrivateRoute>
                </Switch>
            </MemoryRouter>
        </UserProvider>
    )
    expect(container).toMatchSnapshot();
    }
)
 //work please