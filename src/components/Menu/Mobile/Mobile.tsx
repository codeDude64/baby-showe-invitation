/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button, Grid } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import { FC, useEffect, useRef, useState } from 'react';
import { Link } from 'react-scroll';

import { MenuItem as LocalMenuItem } from '../types';
import useStyles from './useStyles';

interface Props {
  menu: Array<LocalMenuItem>;
}

const Mobile: FC<Props> = ({ menu }) => {
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
        {menu.map((item: LocalMenuItem) => (
          <Link
            key={item.name}
            activeClass="active"
            to={item.address}
            spy
            smooth
            onClick={() => setShowMenu(false)}
          >
            <MenuItem>{item.name}</MenuItem>
          </Link>
        ))}
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
