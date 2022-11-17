import FavoriteIcon from '@mui/icons-material/Favorite';
import { Grid } from '@mui/material';

import useStyles from './useStyles';

const Footer = () => {
  const { classes } = useStyles();
  return (
    <Grid container className={classes.root}>
      Hecho con{'  '}
      <FavoriteIcon className={classes.love} />
      para Xóchitl y Alan.
    </Grid>
  );
};

export default Footer;
