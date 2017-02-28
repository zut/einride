import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink } from 'react-router';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem from 'react-bootstrap/lib/NavItem';

class Header extends React.Component {

  render() {
    return (
      <div className="navbar navbar-default navbar-static-top">
        <div className="container">
            <div className="col-md-12">
              <Navbar collapseOnSelect>
                  <Navbar.Header>
                    <Navbar.Brand>
                       <Link to="/">
                        <div className="navbar-header">
                          <svg id="Lager_1" data-name="Lager 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 497.59 45.11"><title>logo-laying-down</title><path d="M278.37,238.55c-.17-1.29-1.07-7.94-1.09-8.18-.16-.64-.32-1.25-.47-1.83-1.44-8.16-7.39-14.74-15.78-15.34-2.6-.18-9.72.26-10.59,6.18a.1.1,0,0,0,.16.08c.54-.56,2.25-2.22,6.27-2.43,2.7-.14,9.94.16,12.8,11,.44,1.45-4.7.09-5.41-.07-1.64-.37-4.88-2-5.37-1.22s1.81,2.1,2.16,3.58c0,0,0,0,0,0,0,.5-2.58.48-3.42.54-6.56.47-12.43,8.74-12.43,8.74s-6.32,6.68-10.2,7.56c-5,1.83-8.85,0-8.89.88-.05,1.16,4,6.68,10.06,6.54a79.57,79.57,0,0,0,12.89-1.9,14.47,14.47,0,0,1,6.12-.13,7.18,7.18,0,0,1,2.84,1.61c2.83,2.34,3,8,4.77-.64.48-3,1.37-7.86,2.45-8.31,3.11-1.28,8.69,4.51,10.28,4.73a9.87,9.87,0,0,1,2.93.86c2,.86,3.47-.93,3.93-2C282.69,248.1,278.54,239.85,278.37,238.55Z" transform="translate(-226.1 -213.09)"/><path d="M311.9,213.6h46.61v5.25H320.42V233h38v5.25h-38V252.9h38.36v5.25H311.9Z" transform="translate(-226.1 -213.09)"/><path d="M469.64,213.6v44.56h-6.8l-31.9-35.74h-.15v35.74h-7V213.6h7.65l31.05,34.78h.15V213.6Z" transform="translate(-226.1 -213.09)"/><path d="M520.74,240.56H504.51V258h-7.26V213.55h24.19c11.08,0,19.35,4.76,19.35,13.26,0,6.57-5.15,11.09-12.8,12.66L542,258h-8.12Zm-18.1-5.19h17c7.78,0,13.35-3,13.35-8.67S527.54,218,519.76,218H502.64Z" transform="translate(-226.1 -213.09)"/><path d="M569.32,213.6h7.07v44.56h-7.07Z" transform="translate(-226.1 -213.09)"/><path d="M387.09,213.6h7.07v44.56h-7.07Z" transform="translate(-226.1 -213.09)"/><path d="M623.43,213.6c18.79,0,28.07,10.14,28.07,22.22,0,12.8-10.12,22.34-27.54,22.34H604.64V213.6Zm20.92,21.83c0-11-8.52-17.09-21.45-17.09H611.71v34.05h11.79C636.44,252.39,644.35,246.12,644.35,235.43Z" transform="translate(-226.1 -213.09)"/><path d="M676.8,213.09h46.61v5.25H685.33v14.19h38v5.25h-38v14.61h38.36v5.25H676.8Z" transform="translate(-226.1 -213.09)"/></svg>
                      </div>
                    </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                  </Navbar.Header>
                  <Navbar.Collapse>
                    <Nav className="nav navbar-nav">
                      <Link to="/about">About</Link>
                      <Link to="/jobs">Join the team</Link>
                      <Link to="/investor">Investor relations</Link>
                      <Link to="/contact">Contact us</Link>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
      </div>
    );
  }
}

export default Header;
