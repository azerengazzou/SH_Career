import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Builder from './pages/Builder';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/builder" component={Builder} />
        {/* Add more routes here if needed */}
      </Switch>
    </Router>
  );
}

export default Routes;
