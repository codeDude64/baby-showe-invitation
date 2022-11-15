import { makeStyles } from '../../../../layouts/theme';

const useStyles = makeStyles({ name: 'ImageModal' })(() => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
      backgroundcolor: 'red',
    },
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default useStyles;
