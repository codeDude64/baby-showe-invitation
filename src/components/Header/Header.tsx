import { Button, Grid } from '@mui/material';

import photo from '../../assets/photo.jpg';
import useStyles from './useStyles';

const Header = () => {
  const { classes } = useStyles();

  return (
    <Grid container direction="column" className={classes.root}>
      <Grid item className={classes.wrapper}>
        <Grid item className={classes.title}>
          <h1> Baby Shower de Alan </h1>
          <p> Bienvenido al mundo hijo querido.</p>
        </Grid>
        <Grid item className={classes.title}>
          <Button variant="contained" className={classes.button}>
            {' '}
            Confirma tu asistencia{' '}
          </Button>
        </Grid>
      </Grid>
      <Grid item className={classes.imageContainer}>
        <img src={photo} alt="La mujer mas hermosa del mundo." />
      </Grid>
    </Grid>
  );
};

export default Header;
