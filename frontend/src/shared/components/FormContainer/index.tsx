import { Card, Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  card: {
    display: 'flex',
    minHeight: '300px',
    width: '400px',
  },
  profilePhoto: {
    display: 'flex',
    justifyContent: 'center',
    padding: '20px 0',

    '& img': {
      width: '100px',
      height: '100px',
      borderRadius: '50%',
    },
  },
  errorsContainer: {},
}));

interface Props {
  children: JSX.Element;
  errors: [] | null;
}

const FormContainer = ({ children, errors }: Props) => {
  const classes = useStyles();

  const photo = require('./assets/profile-photo.png').default;

  return (
    <Card className={classes.card}>
      <Grid container>
        <Grid item xs={12} className={classes.profilePhoto}>
          <img src={photo} alt="profile-pic" />
        </Grid>
        <Grid item xs={12} className={classes.errorsContainer}>
          <ul>
            {errors?.map((error: any) => (
              <li>{error.message}</li>
            ))}
          </ul>
        </Grid>
        <Grid item xs={12}>
          {children}
        </Grid>
      </Grid>
    </Card>
  );
};

export default FormContainer;
