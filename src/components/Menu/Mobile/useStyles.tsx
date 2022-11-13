import { makeStyles } from '../../../layouts/theme';

const useStyles = makeStyles({ name: 'Mobile' })((theme) => ({
  root: {
    paddingTop: 15,
    width: '100%',
    backgroundColor: theme.pallete.primaryColor,
    button: {
      color: theme.pallete.secondaryColor,
      fontFamily: 'Fredoka One',
    },
  },
  buttonContainer: {},
  menuContainer: {
    position: 'absolute',
    zIndex: 1,
  },
}));

export default useStyles;
