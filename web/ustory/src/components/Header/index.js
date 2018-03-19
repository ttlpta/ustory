import React, { Component } from "react";

class Header extends Component {
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
              <div className="col-md-4 right-col">
                <a href="javascript:void(0)" data-toggle="modal" data-target="#myModal" className="login-link">Đăng nhập</a>
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
  
export default Header;
  