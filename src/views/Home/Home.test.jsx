import { render } from '@testing-library/react';
import Home from '../Home/Home'
import Layout from '../Layout/Layout'

test.skip('renders Home', () => {
  const {container} = 
  render(
    <Layout>
      <Home />
    </Layout>,);
  expect(container).toMatchSnapshot();
});
