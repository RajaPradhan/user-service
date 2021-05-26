import { Grid, makeStyles } from '@material-ui/core';

import FormContainer from '../../shared/components/FormContainer';
import LoginForm from './LoginForm';

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

  return (
    <Grid container className={classes.mainContainer}>
      <FormContainer>
        <LoginForm />
      </FormContainer>
    </Grid>
  );
};

export default Login;
