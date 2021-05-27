import { useEffect } from 'react';
import { ThemeProvider } from '@material-ui/core';

import { useTheme } from 'shared/theme';
import Layout from 'shared/components/Layout';
import { CurrentUserInfoProvider } from 'shared/providers/CurrentUserInfoProvider';
import useGetCurrentUserInfo from 'shared/hooks/useGetCurrentUserInfo';
import currentUserInfoReducer from 'shared/reducers/currentUserInfoReducer';
import Routes from './Routes';

const App = () => {
  const { theme } = useTheme();

  const { currentUserInfoState, currentUserInfoDispatch } =
    currentUserInfoReducer();

  const { getCurrentUserInfo } = useGetCurrentUserInfo(currentUserInfoDispatch);

  useEffect(() => {
    getCurrentUserInfo();
    // Disabling lint as getCurrentUserInfo cannot be used in the dep array
  }, [currentUserInfoDispatch]); // eslint-disable-line

  if (currentUserInfoState.loading || !currentUserInfoState.data) {
    return <div>loading...</div>;
  }
  debugger;
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <CurrentUserInfoProvider
          value={{ currentUserInfoState, currentUserInfoDispatch }}
        >
          <Routes />
        </CurrentUserInfoProvider>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
