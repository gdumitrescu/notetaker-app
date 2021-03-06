'use strict';

var React = require('react');
var Router = require('react-router');

var Main = require('../components/Main');
var Home = require('../components/Home');
var Profile = require('../components/Profile');

var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

module.exports = (
  <Route name="app" path="/" handler={Main} >
    <Route name="profile" path="profile/:username" handler={Profile} />
    <DefaultRoute handler={Home} />
  </Route>
);
