import { Card, CardContent, CardMedia, Typography } from '@mui/material';

import handPhoto from '../../../assets/manita.jpg';
import useStyles from './useStyles';

const Invitation = () => {
  const { classes } = useStyles();
  return (
    <Card className={classes.container}>
      <CardContent>
        <CardMedia component="img" image={handPhoto} alt="manita" />
        <Typography pb={4} pt={2} className={classes.title}>
          Tendremos un bebé!!!
        </Typography>
        <Typography className={classes.desc}>
          Has recibido la gran noticia? Un bebé está en camino y la familia Hernández
          Ocampo quiere que seas parte de esta celebración.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Invitation;
