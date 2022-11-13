import { makeStyles } from '../../layouts/theme';

const useStyles = makeStyles({ name: 'MyComponent' })((theme) => ({
  root: {
    textAlign: 'center',
    backgroundColor: theme.pallete.primaryColor,
    color: 'white',
  },
}));

export default useStyles;
