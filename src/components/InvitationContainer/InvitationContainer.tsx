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
    <Grid container className={classes.root} justifyContent="center" pt={5}>
      <Grid item mt={5} mb={5}>
        <Element name={MenuItemAddress.invitation}>
          <Invitation />
        </Element>
      </Grid>
      <Grid item mt={5} mb={5}>
        <Element name={MenuItemAddress.galery}>
          <Galery />
        </Element>
      </Grid>
      <Grid item mt={5} mb={5}>
        <Element name={MenuItemAddress.information}>
          <Information />
        </Element>
      </Grid>
    </Grid>
  );
};

export default InvitationContainer;
