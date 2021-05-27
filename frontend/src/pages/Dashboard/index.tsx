import { useEffect } from 'react';
import { Typography, Grid, makeStyles } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';

import { useCurrentUserInfoContext } from '../../shared/providers/CurrentUserInfoProvider';
import useLogoutUser from '../../shared/hooks/useLogoutUser';

const useStyles = makeStyles(() => ({
  mainContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    minHeight: '700px',
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  const history = useHistory();

  const { data } = useCurrentUserInfoContext();

  const { logoutUser, formSubmissionState } = useLogoutUser();

  useEffect(() => {
    if (!formSubmissionState.loading && !formSubmissionState.error) {
      history.push('/login');
    }
  }, [formSubmissionState]);

  return (
    <Grid container className={classes.mainContainer}>
      <Typography>
        <h2>{`Welcome ${data?.fullName}`}</h2>
      </Typography>
      <Typography variant="body1">
        Click
        <Link to="#" onClick={() => logoutUser()}>
          here
        </Link>
        to logout
      </Typography>
    </Grid>
  );
};

export default Dashboard;
