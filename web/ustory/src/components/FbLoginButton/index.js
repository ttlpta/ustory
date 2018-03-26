import React, { Component } from "react";
import _ from 'lodash';

class FbLoginButton extends Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount(){
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v2.12&appId=112974009136222&autoLogAppEvents=1';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  onClickLoginFb = (e) => {
    e.preventDefault();
    window.FB.login( response => {
      if (response.status === 'connected') {
        window.FB.api('/me?fields=id,name,email', res => {
          const email = _.isUndefined(res.email) ? '' : res.email;
          this.props.loginFb({ email, nickname : response.name, fbId : response.id });
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

export default FbLoginButton; 