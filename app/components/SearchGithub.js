'use strict';

import React from 'react';

class SearchGithub extends React.Component{

  handleSubmit() {
    var router = this.context.router;
    var usernameInput = this.refs.username.getDOMNode();
    var usernameValue = usernameInput.value;
    usernameInput.value = '';
    router.transitionTo('profile', {username: usernameValue});
  }
  render() {
    return (
      <div className="col-sm-12">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group col-sm-7">
            <input type="text"
              className="form-control"
              ref="username"
              placeholder="Search" />
          </div>
          <div className="form-group col-sm-5">
            <button type="submit"
              className="btn btn-block btn-primary">
              Search Github
            </button>
          </div>
        </form>
      </div>
    );
  }
}

SearchGithub.contextTypes = {
  router: React.PropTypes.func.isRequired
};

export default SearchGithub;
