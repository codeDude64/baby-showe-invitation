import { Grid } from '@mui/material';

import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import useScreen from './hooks/useScreen';

const App = () => {
  const [isMobile] = useScreen();
  return (
    <Grid container sx={{ marginLeft: 'auto', marginRight: 'auto' }}>
      <Menu isMobile={isMobile} />
      <Header />
    </Grid>
  );
};

export default App;
