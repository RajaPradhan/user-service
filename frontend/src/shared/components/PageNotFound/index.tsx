import { Grid, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  container: {
    width: '100%',
    minHeight: '700px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const PageNotFound = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <Typography variant="h5">Page not found</Typography>
    </Grid>
  );
};

export default PageNotFound;
