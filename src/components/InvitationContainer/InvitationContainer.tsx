import { Grid } from '@mui/material';
import { Element } from 'react-scroll';

import { MenuItemAddress } from '../Menu/enums';
import Galery from './Galery/Galery';
import Information from './Information/Infomation';
import Invitation from './Invitation/Invitation';
import useStyles from './useStyles';

const InvitationContainer = () => {
  const { classes } = useStyles();

  return (
    <Grid
      container
      className={classes.root}
      justifyContent="center"
      direction="column"
      pt={5}
    >
      <Grid container mt={5} mb={5} justifyContent="center">
        <Grid item sm={8} md={6} xl={5}>
          <Element name={MenuItemAddress.invitation}>
            <Invitation />
          </Element>
        </Grid>
      </Grid>
      <Grid container mt={5} mb={5} justifyContent="center">
        <Grid item sm={8} md={6} xl={5}>
          <Element name={MenuItemAddress.galery}>
            <Galery />
          </Element>
        </Grid>
      </Grid>
      <Grid container mt={5} mb={5} justifyContent="center">
        <Grid item sm={8} md={6} xl={5}>
          <Element name={MenuItemAddress.information}>
            <Information />
          </Element>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default InvitationContainer;
