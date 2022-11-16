import { FC } from 'react';

import Desktop from './Desktop/Desktop';
import { MenuItemAddress } from './enums';
import Mobile from './Mobile/Mobile';
import { MenuItem } from './types';

interface Props {
  isMobile?: boolean;
}

const Menu: FC<Props> = ({ isMobile = false }) => {
  const menu: Array<MenuItem> = [
    { name: 'Invitacion', address: MenuItemAddress.invitation },
    { name: 'Galeria', address: MenuItemAddress.galery },
    { name: 'Detalles', address: MenuItemAddress.information },
  ];
  const chooseComponent = () => {
    let component = <Desktop menu={menu} />;
    if (isMobile) component = <Mobile menu={menu} />;

    return component;
  };

  return chooseComponent();
};

export default Menu;
