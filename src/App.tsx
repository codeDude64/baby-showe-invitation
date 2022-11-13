import { Grid } from '@mui/material';

import Header from './components/Header/Header';

const App = () => {
  return (
    <Grid container sx={{ marginLeft: 'auto', marginRight: 'auto' }}>
      <Header />
    </Grid>
  );
};

export default App;
