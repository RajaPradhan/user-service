import { BrowserRouter as Router, Switch } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import PrivateRoute from './shared/components/PrivateRoute';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/" exact>
          {<Dashboard />}
        </PrivateRoute>
      </Switch>
    </Router>
  );
};

export default Routes;
