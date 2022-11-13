import { Button, Grid } from '@mui/material';

import useStyles from './useStyles';

const Header = () => {
  const { classes } = useStyles();

  return (
    <Grid container direction="column" className={classes.root}>
      <Grid item className={classes.wrapper}>
        <Grid item className={classes.title}>
          <h1> Baby Shower de Xochitl </h1>
          <p> Bienvenido al mundo Alan. </p>
        </Grid>
        <Grid item className={classes.title}>
          <Button variant="contained" className={classes.button}>
            {' '}
            Confirma tu asistencia{' '}
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
