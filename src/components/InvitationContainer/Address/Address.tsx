import { Card, CardContent, CardMedia, Link, Typography } from '@mui/material';

import useStyles from './useStyles';

const Address = () => {
  const { classes } = useStyles();
  return (
    <Card className={classes.container}>
      <CardContent>
        <Typography pb={4} pt={2} className={classes.title}>
          Dirección
        </Typography>
        <Typography className={classes.desc}>
          San Isidro 18, San Ramón, Zamora Michoacán.
        </Typography>
        <Link className={classes.desc} href="https://maps.app.goo.gl/qX8P6Jgo8PDztHeP6">
          Dirección en Google Maps.
        </Link>
      </CardContent>
    </Card>
  );
};

export default Address;
