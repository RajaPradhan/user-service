import { Grid, makeStyles } from '@material-ui/core';

import FormContainer from '../../shared/components/FormContainer';
import RegistrationForm from './RegistrationForm';

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

  return (
    <Grid container className={classes.mainContainer}>
      <FormContainer>
        <RegistrationForm />
      </FormContainer>
    </Grid>
  );
};

export default Registration;
