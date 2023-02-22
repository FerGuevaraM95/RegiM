import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import {Navbar} from './Navbar';
import { store } from '../../app/store';


describe('Navbar', () => {
  it('should render component succesfully', () => {
    const{ getByRole }= render(
      <Provider store={store}>
        <Navbar />
      </Provider>
    );

    expect(getByRole('button', {name: /get early access/i})).toBeInTheDocument();
  });
});