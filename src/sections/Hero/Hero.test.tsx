import { render } from '@testing-library/react';

import { Hero } from './Hero';

describe('Hero', () => {
  it('should render component succesfully', () => {
    const{ getByRole, getByText }= render(<Hero />);

    expect(getByRole('heading', {name: /event registration reimagined/i})).toBeInTheDocument();
    expect(getByRole('button', {name: /get early access/i})).toBeInTheDocument();
    expect(getByRole('img', {name: /mockups/i})).toBeInTheDocument();
  });
});