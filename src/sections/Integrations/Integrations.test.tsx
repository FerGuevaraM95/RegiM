import { render } from '@testing-library/react';

import { Integrations } from './Integrations';

describe('Integrations', () => {
  it('should render component succesfully', () => {
    const{ getByRole, getByText }= render(<Integrations />);

    expect(getByRole('heading', {name: /integrate with your favorite tools/i})).toBeInTheDocument();
    expect(getByText(/connect regim with your most favorite sales and marketing tools/i)).toBeInTheDocument();
  });
});