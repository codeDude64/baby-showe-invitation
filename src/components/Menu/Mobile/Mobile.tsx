import { Button, Grid } from '@mui/material';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Paper from '@mui/material/Paper';
import { useEffect, useRef, useState } from 'react';

import useStyles from './useStyles';

const Mobile = () => {
  const { classes } = useStyles();
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handlerMenuBtnClick = () => {
    setShowMenu((currentValue: boolean) => !currentValue);
  };

  useEffect(() => {
    document.addEventListener('mousedown', (event: MouseEvent) => {
      const target = event.target as Element;
      if (menuRef.current && showMenu && !menuRef?.current?.contains(target)) {
        setShowMenu(false);
      }
    });
  }, [menuRef, showMenu]);

  const renderMenu = () => {
    if (!showMenu) return;
    return (
      <Paper sx={{ width: 320 }}>
        <MenuItem>
          <ListItemText>Invitacion</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>Galeria</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemText>Mapa</ListItemText>
        </MenuItem>
      </Paper>
    );
  };

  return (
    <Grid container className={classes.root} justifyContent="flex-end">
      <Grid className={classes.buttonContainer}>
        <Button onClick={handlerMenuBtnClick}>Menu</Button>
      </Grid>
      <Grid className={classes.menuContainer} ref={menuRef}>
        {renderMenu()}
      </Grid>
    </Grid>
  );
};

export default Mobile;
