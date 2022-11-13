import useMediaQuery from '@mui/material/useMediaQuery';

import { makeStyles } from '../layouts/theme';

const useScreen = () => {
  const useStyles = makeStyles({ name: 'useScreen' })(() => ({}));

  const { theme } = useStyles();

  const { mobile, tablet } = theme.breakpoints.values;
  console.log({ mobile, tablet });

  const isMobile = useMediaQuery(`(max-width:${mobile - 1}px)`);
  const isTablet = useMediaQuery(
    `(min-width:${mobile}px) and (max-width:${tablet - 1}px)`,
  );
  const isDesktop = useMediaQuery(`(min-width:${tablet}px)`);

  return [isMobile, isTablet, isDesktop] as const;
};

export default useScreen;
