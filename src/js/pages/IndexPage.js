import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import { Authenticated, NotAuthenticated, LoginLink } from 'react-stormpath';

export default class IndexPage extends React.Component {
  static contextTypes = {
    user: React.PropTypes.object
  };

  render() {
    return (
      <div className="container">
        <h2 className="text-center">
          Welcome
          { this.context.user ? ' ' + this.context.user.givenName : null }!

        </h2>
        <h3 className="text-center"> <span>Employee Recognition Awards Software</span> </h3>
        <hr />
        <div className="jumbotron">
         
          <ol className="lead">
            <NotAuthenticated>
              <li><Link to="/register">Registration</Link></li>
              <li><LoginLink /></li>
              <li><Link to="/forgot">Forgot Password</Link></li>
            </NotAuthenticated>
            <li><Link to="/profile">Custom Profile Data</Link></li>
            <li><Link to='/awards'>Employee Awards</Link></li>
          </ol>
        </div>
      </div>
    );
  }
}
