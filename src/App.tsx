import { Grid } from '@mui/material';

import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';

const App = () => {
  return (
    <Grid container sx={{ marginLeft: 'auto', marginRight: 'auto' }}>
      <Menu isMobile />
      <Header />
    </Grid>
  );
};

export default App;
