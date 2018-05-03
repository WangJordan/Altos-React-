import React, { Component } from "react";
import PropTypes from "prop-types";

/////////////////////////////////////////////////////////////////////////
// BrowserRouter would be preferred over HashRouter, but BrowserRouter
// would require configuring the server. So we will use HashRouter here.
// Please change to BrowserRouter if you have your own backend server.
///////////////////////////////////////////////////////////////////////////
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import { connect } from "react-redux";

import Footer from "../../components/footer/Footer";
import PrivateRoute from "../misc/PrivateRoute";
import Home from "../home/Home";
import NotFound from "../misc/NotFound";


import "./app.css";

class App extends Component {


  render() {
    const { user } = this.props;
    const isAuthenticated = true && user;
    return (
      <Router>
        <div>
      
            <div className="appContent">
              <Switch>
                <Route exact path="/" component={Home} />
              {/*   <PrivateRoute
                  path="/users"
                  isAuthenticated={isAuthenticated}
                  component={UsersPage}
                />
                <PrivateRoute
                  path="/repos"
                  isAuthenticated={isAuthenticated}
                  component={ReposPage}
                /> */}
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
      </Router>
    );
  }
}

App.propTypes = {
  user: PropTypes.string,
  dispatch: PropTypes.func.isRequired
};

App.contextTypes = {
  store: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  const { auth } = state;
  return {
    user: auth ? auth.user : null
  };
};

export default connect(mapStateToProps)(App);
