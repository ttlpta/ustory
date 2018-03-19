import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import LoginDialog from "../LoginDialog";

import { initCarousel } from '../../utils/jquery';

class Home extends Component {

	componentDidMount(){
		initCarousel();
	}

	render() {
		return (
				<div>
					<Header />
					<div className="featured container">
						<div className="row">
							<div className="col-sm-8">
								<div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
									<ol className="carousel-indicators">
										<li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
										<li data-target="#carousel-example-generic" data-slide-to="1"></li>
										<li data-target="#carousel-example-generic" data-slide-to="2"></li>
									</ol>
									<div className="carousel-inner">
										<div className="item active">
											<img src="images/1.jpg" alt="First slide" />
											<div className="header-text hidden-xs">
												<div className="col-md-12 text-center">
													<h2>Aenean feugiat in ante et </h2>
													<br />
													<h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
													<br />
												</div>
											</div>
										</div>
										<div className="item">
											<img src="images/2.jpg" alt="Second slide" />
											<div className="header-text hidden-xs">
												<div className="col-md-12 text-center">
													<h2>Aenean feugiat in ante et blandit. Vestibulum</h2>
													<br />
													<h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
													<br />
												</div>
											</div>
										</div>
										<div className="item">
											<img src="images/3.jpg" alt="Third slide" />
											<div className="header-text hidden-xs">
												<div className="col-md-12 text-center">
													<h2>Curabitur tincidunt porta lorem vitae</h2>
													<br />
													<h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
													<br />
												</div>
											</div>
										</div>
									</div>
									<a className="left carousel-control" href="#carousel-example-generic" data-slide="prev">
										<span className="glyphicon glyphicon-chevron-left"></span>
									</a>
									<a className="right carousel-control" href="#carousel-example-generic" data-slide="next">
										<span className="glyphicon glyphicon-chevron-right"></span>
									</a>
								</div>
							</div>
							<div className="col-sm-4" >
								<div id="owl-demo-1" className="owl-carousel">
									<img src="images/slide-2.jpg" />
									<img src="images/slide-1.jpg" />
									<img src="images/slide-3.jpg" />
								</div>
								<img src="images/banner.jpg" />
							</div>
						</div>
					</div>
					<div id="page-content" className="index-page container">
						<div className="row">
							<div id="main-content">{/* background not working */}
								<div className="col-md-9">
									<div className="box wrap-vid">
										<div className="zoom-container">
											<div className="zoom-caption">
												<span className="youtube">Youtube</span>
												<a href="single.html">
													<i className="fa fa-play icon-play" style={{color: '#fff'}} />
												</a>
												<p>Video's Name</p>
											</div>
											<img src="images/4.jpg" />
										</div>
										<h3 className="vid-name"><a href="#">Video's Name</a></h3>
										<div className="info">
											<h5>By <a href="#">Kelvin</a></h5>
											<span><i className="fa fa-calendar" />25/3/2015</span> 
											<span><i className="fa fa-heart" />1,200</span>
										</div>
										<p className="more">Aenean feugiat in ante et blandit. Vestibulum posuere molestie risus, ac interdum magna porta non. Pellentesque rutrum fringilla elementum. Curabitur tincidunt porta lorem vitae accumsan.Aenean feugiat in ante et blandit. Vestibulum posuere molestie risus, ac interdum magna porta non.ac interdum magna porta non. Pellentesque rutrum fringilla elementum. Curabitur tincidunt porta lorem vitae accumsan</p>
									</div>
									<div className="box">
										<div className="box-header header-vimeo">
											<h2>Vimeo</h2>
										</div>
										<div className="box-content">
											<div className="row">
												<div className="col-md-6">
													<div className="wrap-vid">
														<div className="zoom-container">
															<div className="zoom-caption">
																<span className="vimeo">Vimeo</span>
																<a href="single.html">
																	<i className="fa fa-play-circle-o fa-5x" style={{color: '#fff'}} />
																</a>
																<p>Video's Name</p>
															</div>
															<img src="images/2.jpg" />
														</div>
														<h3 className="vid-name"><a href="#">Video's Name</a></h3>
														<div className="info">
															<h5>By <a href="#">Kelvin</a></h5>
															<span><i className="fa fa-calendar" />25/3/2015</span> 
															<span><i className="fa fa-heart" />1,200</span>
														</div>
													</div>
													<p className="more">Aenean feugiat in ante et blandit. Vestibulum posuere molestie risus, ac interdum magna porta non. Pellentesque rutrum fringilla elementum. Curabitur tincidunt porta lorem vitae accumsan.</p>
												</div>
												<div className="col-md-6">
													<div className="post wrap-vid">
														<div className="zoom-container">
															<div className="zoom-caption">
																<span className="vimeo">Vimeo</span>
																<a href="single.html">
																	<i className="fa fa-play-circle-o fa-3x" style={{color: '#fff'}} />
																</a>
																<p>Video's Name</p>
															</div>
															<img src="images/1.jpg" />
														</div>
														<div className="wrapper">
															<h5 className="vid-name"><a href="#">Video's Name</a></h5>
															<div className="info">
																<h6>By <a href="#">Kelvin</a></h6>
																<span><i className="fa fa-heart" />1,200 / <i className="fa fa-calendar" />25/3/2015</span>
																<span className="rating">
																	<i className="fa fa-star" />
																	<i className="fa fa-star" />
																	<i className="fa fa-star" />
																	<i className="fa fa-star" />
																	<i className="fa fa-star-half" />
																</span>
															</div>
														</div>
													</div>
													<div className="post wrap-vid">
														<div className="zoom-container">
															<div className="zoom-caption">
																<span className="vimeo">Vimeo</span>
																<a href="single.html">
																	<i className="fa fa-play-circle-o fa-3x" style={{color: '#fff'}} />
																</a>
																<p>Video's Name</p>
															</div>
															<img src="images/2.jpg" />
														</div>
														<div className="wrapper">
															<h5 className="vid-name"><a href="#">Video's Name</a></h5>
															<div className="info">
																<h6>By <a href="#">Kelvin</a></h6>
																<span><i className="fa fa-heart" />1,200 / <i className="fa fa-calendar" />25/3/2015</span>
																<span className="rating">
																	<i className="fa fa-star" />
																	<i className="fa fa-star" />
																	<i className="fa fa-star" />
																	<i className="fa fa-star" />
																	<i className="fa fa-star" />
																</span>
															</div>
														</div>
													</div>
													<div className="post wrap-vid">
														<div className="zoom-container">
															<div className="zoom-caption">
																<span className="vimeo">Vimeo</span>
																<a href="single.html">
																	<i className="fa fa-play-circle-o fa-3x" style={{color: '#fff'}} />
																</a>
																<p>Video's Name</p>
															</div>
															<img src="images/3.jpg" />
														</div>
														<div className="wrapper">
															<h5 className="vid-name"><a href="#">Video's Name</a></h5>
															<div className="info">
																<h6>By <a href="#">Kelvin</a></h6>
																<span><i className="fa fa-heart" />1,200 / <i className="fa fa-calendar" />25/3/2015</span>
																<span className="rating">
																	<i className="fa fa-star" />
																	<i className="fa fa-star" />
																	<i className="fa fa-star" />
																	<i className="fa fa-star" />
																	<i className="fa fa-star-half" />
																</span>
															</div>
														</div>
													</div>
													<div className="post wrap-vid">
														<div className="zoom-container">
															<div className="zoom-caption">
																<span className="vimeo">Vimeo</span>
																<a href="single.html">
																	<i className="fa fa-play-circle-o fa-3x" style={{color: '#fff'}} />
																</a>
																<p>Video's Name</p>
															</div>
															<img src="images/1.jpg" />
														</div>
														<div className="wrapper">
															<h5 className="vid-name"><a href="#">Video's Name</a></h5>
															<div className="info">
																<h6>By <a href="#">Kelvin</a></h6>
																<span><i className="fa fa-heart" />1,200 / <i className="fa fa-calendar" />25/3/2015</span>
																<span className="rating">
																	<i className="fa fa-star" />
																	<i className="fa fa-star" />
																	<i className="fa fa-star" />
																	<i className="fa fa-star" />
																	<i className="fa fa-star-half" />
																</span>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="box">
										<div className="box-header header-photo">
											<h2>Photos</h2>
										</div>
										<div className="box-content">
											<div id="owl-demo-2" className="owl-carousel">
												<div className="item">
													<img src="images/1.jpg" />
													<img src="images/2.jpg" />
												</div>
												<div className="item">
													<img src="images/3.jpg" />
													<img src="images/5.jpg" />
												</div>
												<div className="item">
													<img src="images/8.jpg" />
													<img src="images/9.jpg" />
												</div>
												<div className="item">
													<img src="images/10.jpg" />
													<img src="images/11.jpg" />
												</div>
												<div className="item">
													<img src="images/12.jpg" />
													<img src="images/13.jpg" />
												</div>
											</div>
										</div>
									</div>
									<div className="box">
										<div className="box-header header-natural">
											<h2>Natural</h2>
										</div>
										<div className="box-content">
											<div className="row">
												<div className="col-md-6">
													<img src="images/6.jpg" />
													<h3><a href="#">Marshall, Will, and Holly on a Routine Expedition</a></h3>
													<span><i className="fa fa-heart" /> 1,200 / <i className="fa fa-calendar" /> 25/3/2015 / <i className="fa fa-comment-o"> / </i> 10 <i className="fa fa-eye" /> 945</span>
													<span className="rating">
														<i className="fa fa-star" />
														<i className="fa fa-star" />
														<i className="fa fa-star" />
														<i className="fa fa-star" />
														<i className="fa fa-star-half" />
													</span>
													<p>Marshall, Will, and Holly on a routine expedition, met the greatest earthquake ever known. High on the rapids, it struck their tiny raft! And plunged them down a thousand feet below???...</p>
												</div>
												<div className="col-md-6">
													<img src="images/7.jpg" />
													<h3><a href="#">Your Tread Must be Light and Sure as Though Your Path...</a></h3>
													<span><i className="fa fa-heart" /> 1,200 / <i className="fa fa-calendar" /> 25/3/2015 / <i className="fa fa-comment-o"> / </i> 3 <i className="fa fa-eye" /> 1007</span>
													<span className="rating">
														<i className="fa fa-star" />
														<i className="fa fa-star" />
														<i className="fa fa-star" />
														<i className="fa fa-star" />
														<i className="fa fa-star-half" />
													</span>
													<p>There once was a story about a man who could turn invisible. I thought it was only a story??? until it happened to me. Ok, so here???s how it works: there???s this stuff called...</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div id="sidebar">
								<div className="col-md-3">
									{/*-- Start Widget --*/}
									<div className="widget wid-tags">
										<div className="heading"><h4>Search</h4></div>
										<div className="content">
											<form role="form" className="form-horizontal" method="post">
												<input type="text" placeholder="Enter Search Keywords" defaultValue name="v_search" id="v_search" className="form-control" />
											</form>
										</div>
									</div>
									{/*-- Start Widget --*/}
									<div className="widget wid-tags">
										<div className="heading"><h4>Tags</h4></div>
										<div className="content">
											<a href="#">animals</a>
											<a href="#">cooking</a>
											<a href="#">countries</a>
											<a href="#">home</a>
											<a href="#">likes</a>
											<a href="#">photo</a>
											<a href="#">link</a>
											<a href="#">video</a>
											<a href="#">travel</a>
											<a href="#">images</a>
											<a href="#">love</a>
											<a href="#">lists</a>
											<a href="#">makeup</a>
											<a href="#">media</a>
											<a href="#">password</a>
											<a href="#">pagination</a>
											<a href="#">pictures</a>
										</div>
									</div>
									{/*-- Start Widget --*/}
									<div className="widget wid-comment">
										<div className="heading"><h4>Top Comments</h4></div>
										<div className="content">
											<div className="post">
												<a href="single.html">
													<img src="images/ava-1.jpg" className="img-circle" />
												</a>
												<div className="wrapper">
													<a href="#"><h5>Curabitur tincidunt porta lorem.</h5></a>
													<ul className="list-inline">
														<li><i className="fa fa-calendar" />25/3/2015</li> 
														<li><i className="fa fa-thumbs-up" />1,200</li>
													</ul>
												</div>
											</div>
											<div className="post">
												<a href="single.html">
													<img src="images/ava-2.png" className="img-circle" />
												</a>
												<div className="wrapper">
													<a href="#"><h5>Curabitur tincidunt porta lorem.</h5></a>
													<ul className="list-inline">
														<li><i className="fa fa-calendar" />25/3/2015</li> 
														<li><i className="fa fa-thumbs-up" />1,200</li>
													</ul>
												</div>
											</div>
											<div className="post">
												<a href="single.html">
													<img src="images/ava-3.jpeg" className="img-circle" />
												</a>
												<div className="wrapper">
													<a href="#"><h5>Curabitur tincidunt porta lorem.</h5></a>
													<ul className="list-inline">
														<li><i className="fa fa-calendar" />25/3/2015</li> 
														<li><i className="fa fa-thumbs-up" />1,200</li>
													</ul>
												</div>
											</div>
											<div className="post">
												<a href="single.html">
													<img src="images/ava-4.jpg" className="img-circle" />
												</a>
												<div className="wrapper">
													<a href="#"><h5>Curabitur tincidunt porta lorem.</h5></a>
													<ul className="list-inline">
														<li><i className="fa fa-calendar" />25/3/2015</li> 
														<li><i className="fa fa-thumbs-up" />1,200</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
									{/*-- Start Widget --*/}
									<div className="widget wid-banner">
										<div className="content">
											<img src="images/banner-2.jpg" className="img-responsive" />
										</div>
									</div>
									{/*-- Start Widget --*/}
									<div className="widget wid-categoty">
										<div className="heading"><h4>Category</h4></div>
										<div className="content">
											<select className="col-md-12">
												<option>Mustard</option>
												<option>Ketchup</option>
												<option>Relish</option>
											</select>
										</div>
									</div>
									{/*-- Start Widget --*/}
									<div className="widget wid-calendar">
										<div className="heading"><h4>Calendar</h4></div>
										<div className="content">
											<center><form role="form">        
													<div className>
														<div className="input-group date form_date" data-date data-date-format="dd MM yyyy" data-link-field="dtp_input2" data-link-format="yyyy-mm-dd">              </div>
														<input type="hidden" id="dtp_input2" defaultValue /><br />
													</div>
												</form></center>
										</div>
									</div>
									{/*-- Start Widget --*/}
									<div className="widget wid-tweet">
										<div className="heading"><h4>Tweet</h4></div>
										<div className="content">
											<div className="tweet-item">
												<p><i className="fa fa-twitter" /> TLAS - Coming Soon PSD Mockup</p>
												<a>https://t.co/dLsNZYGVbJ</a>
												<a>#psd</a>
												<a>#freebie</a>
												<a>#freebie</a>
												<a>#dribbble</a>
												<span>July 15th, 2015</span>
											</div>
											<div className="tweet-item">
												<p><i className="fa fa-twitter" /> Little Dude Character With Multiple Hairs</p>
												<a>https://t.co/dLsNZYGVbJ</a>
												<a>#freebie</a>
												<a>#design</a>
												<a>#illustrator</a>
												<a>#dribbble</a>
												<span>June 23rd, 2015</span>
											</div>
											<div className="tweet-item">
												<p><i className="fa fa-twitter" /> Newsletter Subscription Form Mockup</p>
												<a>https://t.co/dLsNZYGVbJ</a>
												<a>#psd</a>
												<a>#freebie</a>
												<a>#freebie</a>
												<a>#dribbble</a>
												<span>June 22nd, 2015</span>
											</div>
											<p>Marshall, Will, and Holly on a routine expedition, met the greatest earthquake ever known. High on the rapids, it struck their tiny raft...</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<LoginDialog />
					<Footer />
				</div>
			);
		}
	}
  
export default Home;
  