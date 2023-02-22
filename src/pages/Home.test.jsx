import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import Home from './Home';
import { store } from '../app/store';

describe('Home', () => {
  it('renders headline', () => {
    const{ getByRole }= render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    expect(getByRole('heading', {name: /event registration reimagined/i})).toBeInTheDocument();
  });
});