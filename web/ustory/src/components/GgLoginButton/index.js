import React, { Component } from "react";

import * as jquery from '../../utils/jquery';
import _ from 'lodash';
import GoogleLogin from 'react-google-login';
import withConnect from './withConnect';

class GgLoginButton extends Component
{
  constructor(props){
    super(props);
  }

  componentWillReceiveProps(nextProps){
    if(this.props.loginGgResult.isLoading && !nextProps.loginGgResult.isLoading) {
      if(!nextProps.loginGgResult.success) {
        this.setState({ errMsg: nextProps.loginGgResult.message});
      } else {
        jquery.hideModal('loginModal');
        localStorage.setItem('ustory_token', nextProps.loginGgResult.data.token);
        this.props.getProfile();
      }
    }
  }
  
  responseGoogle = (response) => {
    if(_.has(response, 'profileObj')) {
      const { profileObj } = response;
      this.props.loginGg({ 
        email : profileObj.email, 
        nickname : profileObj.name, 
        ggId : profileObj.googleId, 
        avatar : profileObj.imageUrl 
      });
    }
  }

  render(){
    return (
      <GoogleLogin
        clientId="265431774403-imglculoget3te91jt8rsjc4o85albh4.apps.googleusercontent.com"
        buttonText="Đăng nhập bằng Google"
        className="button login-gg"
        onSuccess={ this.responseGoogle }
        onFailure={ this.responseGoogle }
      />
    )
  }
}

export default withConnect(GgLoginButton);