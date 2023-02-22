import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import { Hero } from './Hero';
import { store } from '../../app/store';


describe('Hero', () => {
  it('should render component succesfully', () => {
    const{ getByRole, getByText }= render(
      <Provider store={store}>
        <Hero />
      </Provider>
    );

    expect(getByRole('heading', {name: /event registration reimagined/i})).toBeInTheDocument();
    expect(getByRole('button', {name: /get early access/i})).toBeInTheDocument();
    expect(getByRole('img', {name: /mockups/i})).toBeInTheDocument();
  });
});