import { Card, CardContent, Typography } from '@mui/material';

import handPhoto from '../../../assets/manita.jpg';
import useStyles from './useStyles';

const Invitation = () => {
  const { classes } = useStyles();
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent className={classes.container}>
        <img src={handPhoto} alt="manita" width={400} />
        <Typography pb={4} pt={2} className={classes.title}>
          Tendremos un hijo!!!
        </Typography>
        <Typography className={classes.desc}>
          Has recibido la gran noticia? Un bebe está en camino y la familia Hernández
          Ocampo quiere que seas parte de esta celebracion.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Invitation;
