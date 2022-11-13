import { createMakeAndWithStyles } from 'tss-react';

const theme = () => ({
  pallete: {
    primaryColor: '#262945',
  },
});

export const { makeStyles } = createMakeAndWithStyles({ useTheme: theme });
