import background from '../../assets/bg.jpg';
import { makeStyles } from '../../layouts/theme';

const useStyles = makeStyles({ name: 'ImageContainer' })(() => ({
  root: {
    backgroundImage: `url(${background})`,
  },
}));

export default useStyles;
