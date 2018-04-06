import React, { Component } from "react";
import _ from 'lodash';

import * as jquery from '../../utils/jquery';
import { FB_APP_ID } from '../../constant';
import withConnect from './withConnect';

class FbLoginButton extends Component {
  constructor(props) {
    super(props);
  }
  
  componentWillReceiveProps(nextProps){
    if(this.props.loginFbResult.isLoading && !nextProps.loginFbResult.isLoading) {
      if(!nextProps.loginFbResult.success) {
        this.setState({ errMsg: nextProps.loginFbResult.message});
      } else {
        jquery.hideModal('loginModal');
        localStorage.setItem('ustory_token', nextProps.loginFbResult.data.token);
        this.props.getProfile(nextProps.loginFbResult.data.id);
      }
    }
  }
  
  componentDidMount(){
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = `https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v2.12&appId=${FB_APP_ID}&autoLogAppEvents=1`;
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  onClickLoginFb = (e) => {
    e.preventDefault();
    window.FB.login( response => {
      if (response.status === 'connected') {
        window.FB.api('/me?fields=id,name,email', res => {
          const email = _.isUndefined(res.email) ? '' : res.email;
          this.props.loginFb({ email, nickname : res.name, fbId : res.id });
        });
      }
    }, {scope: 'public_profile,email'});
  }

  render(){
    return (
      <div>
        <div id="fb-root"></div>
        <a href="javascript:void(0)" onClick={this.onClickLoginFb} className="button login-fb">Đăng nhập bằng Facebook</a>
      </div>
    );
  }
}

export default withConnect(FbLoginButton); 