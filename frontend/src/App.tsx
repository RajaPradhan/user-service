import { ThemeProvider } from '@material-ui/core';

import { useTheme } from 'shared/theme';
import Layout from 'shared/components/Layout';
import { CurrentUserInfoProvider } from 'shared/providers/CurrentUserInfoProvider';
import Routes from './Routes';

const App = () => {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <CurrentUserInfoProvider>
          <Routes />
        </CurrentUserInfoProvider>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
