import { render } from 'react-dom';
import App from './App';
import { UserProvider } from './context/UserContext';
// we wrap <App /> in the UserProvider tag that was imported in so that everything that is in App will get access to that specific state
render(
<UserProvider>    
<App />
</UserProvider>, 

document.getElementById('root'));
