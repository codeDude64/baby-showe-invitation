import { Grid } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-scroll';

import { MenuItem } from '../types';
import useStyles from './useStyles';

interface Props {
  menu: Array<MenuItem>;
}

const Desktop: FC<Props> = ({ menu }) => {
  const { classes } = useStyles();
  return (
    <Grid container className={classes.root} justifyContent="flex-end">
      {menu.map((item: MenuItem) => (
        <Grid item key={item.name}>
          <Link key={item.name} activeClass="active" to={item.address} spy smooth>
            {item.name}
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default Desktop;
