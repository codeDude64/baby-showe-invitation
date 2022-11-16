import { Grid } from '@mui/material';

import Galery from './Galery/Galery';
import Information from './Information/Infomation';
import Invitation from './Invitation/Invitation';
import useStyles from './useStyles';

const InvitationContainer = () => {
  const { classes } = useStyles();

  return (
    <Grid container className={classes.root} justifyContent="center" pt={5}>
      <Grid item mt={5} mb={5}>
        <Invitation />
      </Grid>
      <Grid item mt={5} mb={5}>
        <Galery />
      </Grid>
      <Grid item mt={5} mb={5}>
        <Information />
      </Grid>
    </Grid>
  );
};

export default InvitationContainer;
