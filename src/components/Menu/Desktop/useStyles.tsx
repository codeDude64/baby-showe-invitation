import { makeStyles } from '../../../layouts/theme';

const useStyles = makeStyles({ name: 'MenuDesktop' })((theme) => ({
  root: {
    paddingTop: 15,
    width: '100%',
    backgroundColor: theme.pallete.primaryColor,
    a: {
      color: theme.pallete.secondaryColor,
      fontFamily: 'Fredoka One',
    },
  },
}));

export default useStyles;
