'use strict';

var axios = require('axios');

var API_URL = 'https://api.github.com/users/';

function getRepos(username) {
  return axios.get(API_URL + username + '/repos');
}

function getUserInfo(username) {
  return axios.get(API_URL + username);
}

var helpers = {
  getGithubInfo: function(username) {
    return axios.all([
      getRepos(username),
      getUserInfo(username)
    ]).then(function(arr) {
      return {
        repos: arr[0].data,
        bio: arr[1].data
      };
    });
  }
};
module.exports = helpers;
