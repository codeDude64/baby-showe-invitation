import { createMakeAndWithStyles } from 'tss-react';

const theme = () => ({
  pallete: {
    primaryColor: '#262945',
    secondaryColor: 'white',
    thirdColor: '#df7866',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 780,
      md: 960,
      lg: 1280,
      xl: 1920,
      mobile: 780,
      tablet: 1280,
    },
  },
});

export const { makeStyles } = createMakeAndWithStyles({ useTheme: theme });
