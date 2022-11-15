import { makeStyles } from '../../layouts/theme';

const useStyles = makeStyles({ name: 'Header' })((theme) => ({
  root: {
    width: '100%',
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: theme.pallete.primaryColor,
    color: 'white',
  },
  love: {
    color: 'red',
    fontSize: 20,
  },
}));

export default useStyles;
