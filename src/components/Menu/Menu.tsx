import { FC } from 'react';

import Desktop from './Desktop/Desktop';
import Mobile from './Mobile/Mobile';

interface Props {
  isMobile?: boolean;
}

const Menu: FC<Props> = ({ isMobile = false }) => {
  const chooseComponent = () => {
    let component = <Mobile />;
    if (!isMobile) component = <Desktop />;

    return component;
  };

  return chooseComponent();
};

export default Menu;
