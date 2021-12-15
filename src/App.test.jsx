import { render } from '@testing-library/react';
import App from './App';
import { UserProvider }  from './context/UserContext'
import { NoteProvider } from './context/NoteContext'

test('renders App', () => {
  const {container} = 
  render(
<UserProvider> 
<NoteProvider>      
<App />
</NoteProvider>
</UserProvider>,);
  expect(container).toMatchSnapshot();
});
