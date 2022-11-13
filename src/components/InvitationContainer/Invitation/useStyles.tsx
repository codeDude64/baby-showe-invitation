import { makeStyles } from '../../../layouts/theme';

const useStyles = makeStyles({ name: 'Invitation' })((theme) => ({
  container: {
    textAlign: 'center',
  },
  title: {
    fontFamily: 'Fredoka One',
    fontSize: 25,
  },
  desc: {
    fontFamily: 'Lato',
  },
}));

export default useStyles;
