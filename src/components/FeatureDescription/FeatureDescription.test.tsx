import { render } from '@testing-library/react';
import { features } from '../../utils/Features';

import { FeatureDescription } from './FeatureDescription';


describe('FeatureDescription', () => {
  it('should render component succesfully', () => {
    const{ getByRole, getByText }= render(<FeatureDescription {...features[0]}  />);

    expect(getByRole('heading', {name: /event metrics/i})).toBeInTheDocument();
    expect(getByText(/track your ticket sales, attendees count and more with much ease\./i)).toBeInTheDocument();
  });
});