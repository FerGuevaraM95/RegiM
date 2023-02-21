import { render } from '@testing-library/react';

import { Features } from './Features';

describe('Features', () => {
  it('should render component succesfully', () => {
    const{ getByRole, getByText }= render(<Features />);

    expect(getByRole('heading', {name: /all\-in\-one event platform/i})).toBeInTheDocument();
    expect(getByText(/deliver an exceptional event experience/i)).toBeInTheDocument();
    expect(getByRole('button', {name: /see it in action \(2 min\)/i})).toBeInTheDocument();
  });
});