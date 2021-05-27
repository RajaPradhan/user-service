import { Route, Redirect } from 'react-router-dom';

import { useCurrentUserInfoContext } from '../../providers/CurrentUserInfoProvider';

const PrivateRoute = ({ children, ...rest }: any) => {
  const { data } = useCurrentUserInfoContext();

  return (
    <Route
      {...rest}
      render={() => (data?.email ? children : <Redirect to="/login" />)}
    />
  );
};

export default PrivateRoute;
