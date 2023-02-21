import { render } from '@testing-library/react';

import {Navbar} from './Navbar';

describe('Navbar', () => {
  it('should render component succesfully', () => {
    const{ getByRole }= render(<Navbar />);

    expect(getByRole('button', {name: /get early access/i})).toBeInTheDocument();
  });
});