import { Grid } from '@mui/material';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import InvitationContainer from './components/InvitationContainer/InvitationContainer';
import Menu from './components/Menu/Menu';
import useScreen from './hooks/useScreen';

const App = () => {
  const [isMobile] = useScreen();
  return (
    <Grid container sx={{ marginLeft: 'auto', marginRight: 'auto' }}>
      <Menu isMobile={isMobile} />
      <Header />
      <InvitationContainer />
      <Footer />
    </Grid>
  );
};

export default App;
