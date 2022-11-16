import { makeStyles } from '../../layouts/theme';

const useStyles = makeStyles({ name: 'Header' })((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.pallete.primaryColor,
  },
  title: {
    color: theme.pallete.secondaryColor,
    marginBottom: '3em',
    h1: {
      fontFamily: 'Fredoka One',
      fontSize: 30,
    },
    p: {
      fontFamily: 'Lato',
    },
  },
  button: {
    backgroundColor: theme.pallete.thirdColor,
    borderRadius: 50,
    marginBottom: '3em',
  },
  imageContainer: {
    img: {
      minWidth: 304,
      maxWidth: 500,
      width: '95%',
      alignSelf: 'center',
    },
  },
}));

export default useStyles;
