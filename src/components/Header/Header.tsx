import { Button, Grid } from '@mui/material';

import photo from '../../assets/photo.jpg';
import useScreen from '../../hooks/useScreen';
import useStyles from './useStyles';

const Header = () => {
  const { classes } = useStyles();
  const [isMobile] = useScreen();

  return (
    <Grid
      container
      direction={isMobile ? 'column' : 'row'}
      className={classes.root}
      justifyContent="center"
      pt={5}
    >
      <Grid item ml={1} alignSelf={isMobile ? 'normal' : 'center'} mr={isMobile ? 0 : 20}>
        <Grid item className={classes.title}>
          <h1> Baby Shower de Alan </h1>
          <p> Bienvenido al mundo, hijo querido.</p>
        </Grid>
        <Grid item className={classes.title}>
          <Button variant="contained" className={classes.button}>
            Confirma tu asistencia
          </Button>
        </Grid>
      </Grid>
      <Grid
        item
        className={classes.imageContainer}
        display="flex"
        justifyContent="center"
        pb={5}
      >
        <img src={photo} alt="La mujer mas hermosa del mundo." />
      </Grid>
    </Grid>
  );
};

export default Header;
