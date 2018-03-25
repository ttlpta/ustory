import React, { Component } from "react";

import ErrorMsg from '../ErrorMsg';
import withConnect from './withConnect';
import * as validate from '../../utils/validate';
import * as jquery from '../../utils/jquery';

class LoginDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lEmail : '',
      lPassword: '',
      rEmail: '',
      rPassword: '',
      errMsg: ''
    }
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.register.isLoading && !nextProps.register.isLoading) {
      if(!nextProps.register.success) {
        this.setState({ errMsg: nextProps.register.message});
      } else {
        jquery.hideModal('loginModal');
        jquery.alert('Bạn đã đăng kí thành công');
        localStorage.setItem('ustory_token', nextProps.register.data.token);
        this.props.getProfile(nextProps.register.data.id);
      }
    }
  }

  handleChangeInput = e => {
    this.setState({
      [e.target.name] : e.target.value
    });
  }

  onRegist = () => {
    const email = this.state.rEmail;
    const password = this.state.rPassword;
    const nickname = this.state.rName;
    if(!nickname){
      this.setState({ errMsg: 'Bạn chưa điền nickname' });
      return;
    }

    if(!email){
      this.setState({ errMsg: 'Bạn chưa điền email' });
      return;
    }

    if(!validate.validateEmail(email)){
      this.setState({ errMsg: 'Định dạng Email chưa đúng' });
      return;
    }
    
    if(!password) {
      this.setState({ errMsg: 'Bạn chưa điền mật khẩu'});
      return;
    }

    if(!validate.validateLengthText(password)) {
      this.setState({ errMsg: 'Mật khẩu quá ngắn'});
      return;
    }
      

    this.props.regist({ email, password, nickname });
  }

  render() {
    return (
      <div id="loginModal" className="modal fade" role="dialog">
        <div className="login-wrap">
          <div className="login-html">
            <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked />
            <label htmlFor="tab-1" className="tab">Đăng nhập</label>
            <input id="tab-2" type="radio" name="tab" className="sign-up" />
            <label htmlFor="tab-2" className="tab">Đăng ký</label>
            <input id="tab-3" type="radio" name="tab" className="ustory-login" />
            <label htmlFor="tab-3" className="tab" />
            <ErrorMsg msg={ this.state.errMsg }/>
            <div className="login-form">
              <div className="sign-in-htm">
                <div className="group">
                  <a href="#" className="button login-fb">Đăng nhập bằng Facebook</a>
                </div>
                <div className="group">
                  <a href="#" className="button login-gg">Đăng nhập bằng Google</a>
                </div>
                <div className="group">
                  <a href="javascript:void(0)" className="button login-ustory">
                    <label htmlFor="tab-3">Đăng nhập bằng tài khoản</label>
                  </a>
                </div>
                <div className="hr" />
                <div className="foot-lnk">
                  <label htmlFor="tab-2">Bạn chưa có tài khoản?
                  </label></div>
              </div>
              <div className="ustory-htm">
                <div className="group">
                  <label htmlFor="user" className="label">Email</label>
                  <input className="user" type="text" className="input" />
                </div>
                <div className="group">
                  <label htmlFor="pass" className="label">Mật khẩu</label>
                  <input className="pass" type="password" className="input" data-type="password" />
                </div>
                <div className="group">
                  <input id="check" type="checkbox" className="check" defaultChecked />
                  <label htmlFor="check"><span className="icon" /> Lưu trạng thái đăng nhập</label>
                </div>
                <div className="group">
                  <input type="submit" className="button" defaultValue="Đăng nhập" />
                </div>
                <div className="foot-lnk">
                  <label htmlFor="tab-1">Quay lại</label>
                </div>
                <div className="hr" />
                <div className="foot-lnk">
                  <label htmlFor="tab-1">Quên mật khẩu?</label>
                </div>
              </div>
              <div className="sign-up-htm">
                <div className="group">
                  <label htmlFor="user" className="label">Nickname</label>
                  <input className="user input" type="text" name="rName" onChange={ this.handleChangeInput }/>
                </div>
                <div className="group">
                  <label htmlFor="user" className="label">Email</label>
                  <input className="user input" type="text" name="rEmail" onChange={ this.handleChangeInput }/>
                </div>
                <div className="group">
                  <label htmlFor="pass" className="label">Mật khẩu</label>
                  <input className="pass input" 
                    type="password" 
                    data-type="password"
                    name="rPassword"
                    onChange={ this.handleChangeInput }
                  />
                </div>
                <div className="group">
                  <input type="button" className="button" defaultValue="Đăng ký" onClick={ this.onRegist } />
                </div>
                <div className="hr" />
                <div className="foot-lnk">
                  <label htmlFor="tab-1">Bạn đã có tài khoản?</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
  
export default withConnect(LoginDialog);
  