import { Button, Grid } from '@mui/material';

import useStyles from './useStyles';

const Desktop = () => {
  const { classes } = useStyles();
  return (
    <Grid container className={classes.root} justifyContent="flex-end">
      <Grid>
        <Button>Invitacion </Button>
      </Grid>
      <Grid>
        <Button> Galeria </Button>
      </Grid>
      <Grid>
        <Button> Dirección </Button>
      </Grid>
    </Grid>
  );
};

export default Desktop;
