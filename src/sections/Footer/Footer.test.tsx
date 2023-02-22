import { render } from '@testing-library/react';

import {Footer} from './Footer';

describe('Footer', () => {
  it('should render component succesfully', () => {
    const{ getByRole, getByText }= render(<Footer />);

    expect(getByRole('heading', {name: /create your event with regim/i})).toBeInTheDocument();
    expect(getByText(/leveraging our virtual and live event experience, hubilo offers everything you need to set up your next hybrid event from registration to executing a flawless event\./i)).toBeInTheDocument();
    expect(getByRole('button', {name: /get early access/i})).toBeInTheDocument();

  });
});