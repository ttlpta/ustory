import React, { Component } from "react";

import ErrorMsg from '../ErrorMsg';
import withConnect from './withConnect';

class LoginDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lEmail : '',
      lPassword: '',
      rEmail: '',
      rPassword: '',
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

    this.props.regist({ email, password });
  }

  render() {
    return (
      <div id="myModal" className="modal fade" role="dialog">
        <div className="login-wrap">
          <div className="login-html">
            <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked />
            <label htmlFor="tab-1" className="tab">Đăng nhập</label>
            <input id="tab-2" type="radio" name="tab" className="sign-up" />
            <label htmlFor="tab-2" className="tab">Đăng ký</label>
            <input id="tab-3" type="radio" name="tab" className="ustory-login" />
            <label htmlFor="tab-3" className="tab" />
            <ErrorMsg msg={'aadasd'}/>
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
  