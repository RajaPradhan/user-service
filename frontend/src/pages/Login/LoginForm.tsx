import { useFormik } from 'formik';
import * as yup from 'yup';
import {
  TextField,
  Button,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: '40px',
  },
  formFieldContainer: {
    paddingBottom: '20px',
  },
  actionButtonContainer: {
    padding: '30px 0',
    display: 'flex',
    justifyContent: 'flex-end',

    '& button': {
      marginLeft: '20px',
      textTransform: 'none',
    },
  },
}));

const LoginForm = () => {
  const classes = useStyles();

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .required('Email is required')
      .email('Email must be valid'),
    password: yup
      .string()
      .required('Password is required')
      .matches(
        /^(?=\D*\d)\S{8,}$/,
        'Password must be atleast 8 characters and must contain atleast a digit and a character',
      ),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Grid container className={classes.formContainer}>
      <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
        <Grid item xs={12} className={classes.formFieldContainer}>
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </Grid>

        <Grid item xs={12} className={classes.formFieldContainer}>
          <TextField
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
        </Grid>

        <Grid item xs={12} className={classes.actionButtonContainer}>
          <Button color="primary" variant="outlined" type="reset">
            <Typography variant="body1">Reset</Typography>
          </Button>
          <Button
            color="primary"
            variant="contained"
            type="submit"
            disabled={!(formik.isValid && formik.dirty)}
          >
            <Typography variant="body1">Log in</Typography>
          </Button>
        </Grid>
      </form>
    </Grid>
  );
};

export default LoginForm;
