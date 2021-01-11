import React, { Component } from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Timer from "./Timer";

export default class Hot extends Component {
    render() {
        const startDate = new Date().getTime() + 46400000; // 1 day (Milliseconds Unit);
        const settings = {
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            adaptiveHeight: true,
            responsive: [
              {
                breakpoint: 1200,
                settings: {
                  arrows: false
                }
              }
            ]
        };
        return (
            <section className="hot">
              <div className="content">
                  <h2 className="hidden">Hot Deals</h2>
                  <div className="row hot-body">
                      <div className="col-4 hot-deals">
                          <div className="deals-slider">
                              <div className="deals-item">
                                  <h3 className="deals-title">Hot Deals</h3>
                                  <br />
                                  
                                  <br />
                                  <div className="deals-picture">
                                      <div className="deals-add">
                                          <button className="add-button">
                                              <img src="img/add-button.png" className="add-icon" alt="" />
                                              Add to card
                                          </button>
                                      </div>
                                      <img src="img/deals-image.jpg" alt="" className="deals-image" />
                                      <Timer startDate={startDate} />
                                  </div>
                                  <div className="deals-container">
                                      <h4 className="text-center deals-bris">Aenean Ru Bristique</h4>
                                      <div className="stars-wrap">
                                          <img src="img/stars.png" alt="" className="deals-stars" />
                                      </div>
                                      <div className="deals-btns">
                                          <div className="btns-left">
                                              <ul className="btns-list">
                                                  <li className="btns-item">
                                                      <a href="/" className="btns-link"><img src="img/btns-icon1.png" alt="" className="btns-icon" /></a>
                                                  </li>
                                                  <li className="btns-item">
                                                      <a href="/" className="btns-link"><img src="img/btns-icon2.png" alt="" className="btns-icon" /></a>
                                                  </li>
                                                  <li className="btns-item">
                                                      <a href="/" className="btns-link"><img src="img/btns-icon3.png" alt="" className="btns-icon" /></a>
                                                  </li>
                                              </ul>
                                          </div>
                                          <div className="btns-right">
                                              <div className="btns-price-old">$35</div>
                                              <div className="btns-price-new">$30</div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-8 hot-big">
                            <Slider {...settings} className="one-time hot-slider">
                              <div className="hot-item">
                                  <div className="hot-text">
                                      <div className="hot-title">Indoor <b>furniture</b></div>
                                      <p className="hot-descr">Save up to 50% of all furniture</p>
                                      <div className="hot-yes"><a href="/" className="hot-link">Shop now</a></div>
                                  </div>
                              </div>
                              <div className="hot-item">
                                  <div className="hot-text">
                                      <div className="hot-title">Indoor <b>furniture</b></div>
                                      <p className="hot-descr">Save up to 50% of all furniture</p>
                                      <div className="hot-yes"><a href="/" className="hot-link">Shop now</a></div>
                                  </div>
                              </div>
                              <div className="hot-item">
                                  <div className="hot-text">
                                      <div className="hot-title">Indoor <b>furniture</b></div>
                                      <p className="hot-descr">Save up to 50% of all furniture</p>
                                      <div className="hot-yes"><a href="/" className="hot-link">Shop now</a></div>
                                  </div>
                              </div>
                          </Slider>
                      </div>
                  </div>
              </div>
          </section>
        )
    }
}
