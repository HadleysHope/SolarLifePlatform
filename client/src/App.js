import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";

const App = () => {
  // User Authentication Needed
  // This will access login page change to true to access dashboard.
  const isAuthenticated = false;


// Use for Development for testing purposes.
 return (
    <div className="app">
      {isAuthenticated ? (
        <Dashboard />
      ) : (
        <Login />
      )}
    </div>

  
  /* This is the real code once authentication is activated
return (
  <Router>
    <div className='app'>
      <Switch>
        // Login Page
        <Route exact path="/Login" Component={Login} />

        // Protected route: Dashboard
        {isAuthenticated ? (
          <Route exact path="/" Component={Dashboard} />
        ) : (
          // Redirect to login if not authenticated
          <Route render ={() => <Redirect to="/login" />} />
        )}
      </Switch>
    </div>
  </Router>
);
*/

  );
};

export default App;