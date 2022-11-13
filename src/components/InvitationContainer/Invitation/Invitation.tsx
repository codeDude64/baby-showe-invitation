import { Card, CardContent, Typography } from '@mui/material';

import useStyles from './useStyles';

const Invitation = () => {
  const { classes } = useStyles();
  return (
    <Card sx={{ minWidth: 275 }} >
      <CardContent className={classes.container}>
        <Typography pb={4} pt={2} className={classes.title}>
          Tendremos un hijo!!!
        </Typography>
        <Typography className={classes.desc}>
          Haz recivido la gran noticia? Un bebe esta en camino y la familia Hernandez
          Ocampo quiere que seas parte de esta celebracion.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Invitation;
