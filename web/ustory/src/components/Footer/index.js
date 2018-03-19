import React, { Component } from "react";

class Footer extends Component {
  render() {
      return (
        <footer>
          <div className="wrap-footer">
            <div className="container">
              <div className="row">
                <div className="col-md-4 col-footer footer-1">
                  <div className="footer-heading"><h1>UStory</h1></div>
                  <div className="content">
                    <p>Đưa những câu chuyện của bạn đến với thế giới.</p>
                    <strong>Email:</strong>
                    <form action="#" method="post">
                      <input type="text" name="your-name" value="" size="40" placeholder="Địa chỉ Email của bạn" />
                      <input type="submit" value="Theo dõi" className="btn btn-3" />
                    </form>
                  </div>
                </div>
                <div className="col-md-4 col-footer footer-2">
                  <div className="footer-heading"><h4>Tags</h4></div>
                  <div className="content">
                    <a href="#">animals</a>
                    <a href="#">cooking</a>
                    <a href="#">countries</a>
                    <a href="#">city</a>
                    <a href="#">children</a>
                    <a href="#">home</a>
                    <a href="#">likes</a>
                    <a href="#">photo</a>
                    <a href="#">link</a>
                    <a href="#">law</a>
                    <a href="#">shopping</a>
                    <a href="#">skate</a>
                    <a href="#">scholl</a>
                    <a href="#">video</a>
                    <a href="#">travel</a>
                    <a href="#">images</a>
                    <a href="#">love</a>
                    <a href="#">lists</a>
                    <a href="#">makeup</a>
                    <a href="#">media</a>
                    <a href="#">password</a>
                    <a href="#">pagination</a>
                    <a href="#">wildlife</a>
                  </div>
                </div>
                <div className="col-md-4 col-footer footer-3">
                  <div className="footer-heading"><h4>Link List</h4></div>
                  <div className="content">
                    <ul>
                      <li><a href="#">MOST VISITED COUNTRIES</a></li>
                      <li><a href="#">5 PLACES THAT MAKE A GREAT HOLIDAY</a></li>
                      <li><a href="#">PEBBLE TIME STEEL IS ON TRACK TO SHIP IN JULY</a></li>
                      <li><a href="#">STARTUP COMPANY???S CO-FOUNDER TALKS ON HIS NEW PRODUCT</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      );
    }
  }
  
export default Footer;
  