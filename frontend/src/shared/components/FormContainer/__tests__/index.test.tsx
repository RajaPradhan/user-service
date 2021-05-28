import { render } from '@testing-library/react';

import Selectors from '../../../../shared/testUtils/selectors';
import FormContainer from '../index';

describe('Tests for FormContainer component', () => {
  it('should successfully render the FormContainer', async () => {
    const { getByTestId, getByText } = render(
      <FormContainer
        errors={[
          {
            message: 'Invalid credentials',
          },
        ]}
      >
        <h3 data-testid="form-header">Login form</h3>
      </FormContainer>,
    );

    expect(getByTestId(Selectors.PROFILE_PIC)).toBeInTheDocument();
    expect(getByText('Invalid credentials')).toBeInTheDocument();
    expect(getByTestId('form-header')).toBeInTheDocument();
  });
});
