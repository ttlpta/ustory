import React, { Component } from "react";

import withConenct from './withConnect';

class Header extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <header>
        <nav id="top">
          <div className="container">
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4 logo-container">
                <img src="images/ustory-logo.png" alt="UStory Logo" />
              </div>
              <div className="col-md-4">
                {
                  this.props.profile.isLogin && 
                  <div className="dropdown">
                    <div className="dropdown-toggle" 
                      id="dropdownMenu1" 
                      data-toggle="dropdown"
                      aria-haspopup="true" aria-expanded="true">
                      <img className="avatar" src='./images/no_user.png'/>{this.props.profile.nickname}
                    </div>
                    <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu1">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                      <li role="separator" className="divider"></li>
                      <li><a href="#">Separated link</a></li>
                    </ul>
                  </div>
                }
                {
                  ! this.props.profile.isLogin &&
                  <a href="javascript:void(0)" data-toggle="modal" data-target="#loginModal" className="login-link">Đăng nhập</a>
                }
              </div>
            </div>
          </div>
        </nav>
        
          <nav id="menu" className="navbar container">
          <div className="col-md-2"></div>
          <div className="col-md-8 collapse navbar-collapse navbar-ex1-collapse">
            <ul className="nav navbar-nav category-nav">
              <li><a href="index.html">Trang chủ</a></li>
              <li><a href="index.html">Truyện ngắn</a></li>
              <li><a href="index.html">Truyện dài</a></li>
              <li><a href="index.html">Note</a></li>
              <li><a href="index.html">Ký sự</a></li>
            </ul>
          </div>
          <div className="col-md-2"></div>
        </nav>
      </header>
    );
  }
}
  
export default withConenct(Header);
  