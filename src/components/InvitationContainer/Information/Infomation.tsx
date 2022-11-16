import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MapIcon from '@mui/icons-material/Map';
import { Card, CardContent, Link, Typography } from '@mui/material';

import useStyles from './useStyles';

const Information = () => {
  const { classes } = useStyles();
  return (
    <Card className={classes.container}>
      <CardContent>
        <Typography pb={4} pt={2} className={classes.title}>
          Detalles
        </Typography>
        <Typography className={classes.desc}>
          Nos complace extenderte la invitación para que nos acompañes el día
        </Typography>
        <Typography className={classes.desc}>
          <CalendarMonthIcon />
          Domingo 27 de Noviembre a partir de las 02:00 pm.{' '}
        </Typography>
        <Typography className={classes.desc}>
          <MapIcon />
          San Isidro 18, San Ramón, Zamora, Michoacán.
        </Typography>
        <Link className={classes.desc} href="https://maps.app.goo.gl/qX8P6Jgo8PDztHeP6">
          Dirección en Google Maps.
        </Link>
        <Typography mt={5}>
          El evento es mixto por lo tanto estan invitados mujeres y hombres.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Information;
