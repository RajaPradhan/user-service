import { useEffect } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import FormContainer from '../../shared/components/FormContainer';
import LoginForm from './LoginForm';
import { UserPayload } from '../../shared/types';
import useLoginUser from '../../shared/hooks/useLoginUser';

const useStyles = makeStyles(() => ({
  mainContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '700px',
  },
}));

const Login = () => {
  const classes = useStyles();

  const history = useHistory();

  const { loginUser, formSubmissionState } = useLoginUser();

  useEffect(() => {
    if (!formSubmissionState.loading && formSubmissionState.data) {
      history.push('/');
    }
  }, [formSubmissionState]);

  return (
    <Grid container className={classes.mainContainer}>
      <FormContainer errors={[]}>
        <LoginForm
          onSubmit={(userPayload: UserPayload) => loginUser(userPayload)}
        />
      </FormContainer>
    </Grid>
  );
};

export default Login;
