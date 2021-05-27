import { useEffect } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import FormContainer from '../../shared/components/FormContainer';
import RegistrationForm from './RegistrationForm';
import { UserPayload } from '../../shared/types';
import useRegisterUser from '../../shared/hooks/useRegisterUser';

const useStyles = makeStyles(() => ({
  mainContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '700px',
  },
}));

const Registration = () => {
  const classes = useStyles();

  const history = useHistory();

  const {
    registerUser,
    formSubmissionState: { data, loading },
  } = useRegisterUser();

  useEffect(() => {
    if (!loading && data) {
      history.push('/');
    }
  }, [loading, data, history]);

  return (
    <Grid container className={classes.mainContainer}>
      <FormContainer errors={[]}>
        <RegistrationForm
          onSubmit={(userPayload: UserPayload) => registerUser(userPayload)}
        />
      </FormContainer>
    </Grid>
  );
};

export default Registration;
