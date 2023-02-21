import { render } from '@testing-library/react';

import {Navbar} from './Navbar';

describe('Navbar', () => {
  it('renders headline', () => {
    const{ getByRole }= render(<Navbar />);

    expect(getByRole('button', {name: /get early access/i})).toBeInTheDocument();
  });
});