import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import { Integrations } from './Integrations';
import { store } from '../../app/store';

describe('Integrations', () => {
  it('should render component succesfully', () => {
    const{ getByRole, getByText }= render(
      <Provider store={store}>
        <Integrations />
      </Provider>
    );

    expect(getByRole('heading', {name: /integrate with your favorite tools/i})).toBeInTheDocument();
    expect(getByText(/connect regim with your most favorite sales and marketing tools/i)).toBeInTheDocument();
  });
});