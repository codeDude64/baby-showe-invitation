import { createMakeAndWithStyles } from 'tss-react';

const theme = () => ({
  pallete: {
    primaryColor: '#262945',
    secondaryColor: 'white',
    thirdColor: '#df7866',
  },
});

export const { makeStyles } = createMakeAndWithStyles({ useTheme: theme });
