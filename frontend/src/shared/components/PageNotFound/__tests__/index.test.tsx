import { render } from '@testing-library/react';

import PageNotFound from '../index';

describe('Tests for PageNotFound component', () => {
  it('should successfully render the PageNotFound component', async () => {
    const { getByText } = render(<PageNotFound />);

    expect(getByText('Page not found')).toBeInTheDocument();
  });
});
