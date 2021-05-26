import { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';

import useGetCurrentUserInfo from '../../hooks/useGetCurrentUserInfo';

const PrivateRoute = ({ children, ...rest }: any) => {
  const { getCurrentUserInfo, currentUserInfoState } = useGetCurrentUserInfo();

  useEffect(() => {
    getCurrentUserInfo();
  }, [getCurrentUserInfo]);

  return (
    <Route
      {...rest}
      render={() => {
        return currentUserInfoState.data ? children : <Redirect to="/login" />;
      }}
    />
  );
};

export default PrivateRoute;
