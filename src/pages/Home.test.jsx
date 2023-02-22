import { render, screen } from '@testing-library/react';

import Home from './Home';

describe('Home', () => {
  it('renders headline', () => {
    const{ getByRole }= render(<Home />);

    expect(getByRole('heading', {name: /event registration reimagined/i})).toBeInTheDocument();
  });
});