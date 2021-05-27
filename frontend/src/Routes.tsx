import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PrivateRoute from './shared/components/PrivateRoute';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/register">
          <Registration />
        </Route>
        <Route path="/login">
          <Login />
        </Route>

        <PrivateRoute path="/" exact>
          <Dashboard />
        </PrivateRoute>
      </Switch>
    </Router>
  );
};

export default Routes;
