//Nav bar in header

import React from 'react';
import { Link } from 'react-router';

import { LoginLink, LogoutLink, NotAuthenticated, Authenticated } from 'react-stormpath';

export default class Header extends React.Component {
  render() {
    var styler = {
      color:'#fff',
      backgroundColor:'#337ab7',
      borderColor:'#2e6da4',
      fontColor: '#fff'
    };

    return (
      <nav className="navbar navbar-default navbar-static-top" style ={styler}>
        <div className="container"  >
          <div className="navbar-header" >
            <button type="button" data-toggle="collapse" data-target="#navbar-collapse" className="navbar-toggle collapsed">
              <span className="sr-only">Toggle Navigation</span>
              <span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span>
            </button>
          </div>
          <div id="navbar-collapse" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li><Link to="/" activeClassName="active" onlyActiveOnIndex={true}>Home</Link></li>
                <Authenticated>
              <li><Link to="/Awards" activeClassName="active" onlyActiveOnIndex={true}>Awards</Link></li>
                </Authenticated>
              <Authenticated>
                <li>
                  <Link to="/profile" activeClassName="active">Profile</Link>
                </li>
              </Authenticated>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <NotAuthenticated>
                <li>
                  <LoginLink activeClassName="active" />
                </li>
              </NotAuthenticated>
              <Authenticated>
                <li>
                  <LogoutLink />
                </li>
              </Authenticated>
              <NotAuthenticated>
                <li>
                  <Link to="/register" activeClassName="active">Create Account</Link>
                </li>
              </NotAuthenticated>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}