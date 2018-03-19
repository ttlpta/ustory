import React, { Component } from "react";

class LoginDialog extends Component {
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
                  <input className="user" type="text" className="input" />
                </div>
                <div className="group">
                  <label htmlFor="pass" className="label">Password</label>
                  <input className="pass" type="password" className="input" data-type="password" />
                </div>
                <div className="group">
                  <label htmlFor="pass" className="label">Repeat Password</label>
                  <input className="pass" type="password" className="input" data-type="password" />
                </div>
                <div className="group">
                  <label htmlFor="pass" className="label">Email Address</label>
                  <input className="pass" type="text" className="input" />
                </div>
                <div className="group">
                  <input type="submit" className="button" defaultValue="Sign Up" />
                </div>
                <div className="hr" />
                <div className="foot-lnk">
                  <label htmlFor="tab-1">Already Member?</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
  
export default LoginDialog;
  