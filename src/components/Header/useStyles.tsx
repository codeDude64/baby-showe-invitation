import { makeStyles } from '../../layouts/theme';

const useStyles = makeStyles({ name: 'Header' })((theme) => ({
  root: {
    textAlign: 'center',
    backgroundColor: theme.pallete.primaryColor,
    color: theme.pallete.secondaryColor,
  },
}));

export default useStyles;
