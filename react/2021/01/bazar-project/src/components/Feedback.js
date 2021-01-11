import React, { Component } from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default class Feedback extends Component {
    render() {
        const settings = {
            dots: true,
            arrows: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            adaptiveHeight: true
        };
        return (
            <section className="feedback">
              <div className="content">
                  <div className="gallery-title feedback-title">
                      <h2 className="catalog-nw">Clients feedback</h2>
                  </div>
                  <Slider {...settings} className="single-item feedback-body">
                      <div className="feedback-item">
                          <p className="feedback-text">
                              onsetetur sadipscing elitr, 
                              sed diam nonumy eirmod tempor invidunt ut labore et 
                              dolore magna aliquyam erat, sed diam voluptua. At vero 
                              eos et accusam et justo duo dolores et ea rebum. Stet 
                              clita kasd gubergren.
                          </p>
                          <div className="feedback-author">
                              <div className="feedback-picture">
                                  <img src="img/feedback-image1.jpg" alt="" className="feedback-image" />
                              </div>
                              <div className="feedback-info">
                                  <div className="feedback-nm"><b>John Smith</b></div>
                                  <div className="feedback-cat">Furniture client</div>
                              </div>
                          </div>
                      </div>
                      <div className="feedback-item">
                          <p className="feedback-text">
                              onsetetur sadipscing elitr, 
                              sed diam nonumy eirmod tempor invidunt ut labore et 
                              dolore magna aliquyam erat, sed diam voluptua. At vero 
                              eos et accusam et justo duo dolores et ea rebum. Stet 
                              clita kasd gubergren.
                          </p>
                          <div className="feedback-author">
                              <div className="feedback-picture">
                                  <img src="img/feedback-image1.jpg" alt="" className="feedback-image" />
                              </div>
                              <div className="feedback-info">
                                  <div className="feedback-nm"><b>John Smith</b></div>
                                  <div className="feedback-cat">Furniture client</div>
                              </div>
                          </div>
                      </div>
                      <div className="feedback-item">
                          <p className="feedback-text">
                              onsetetur sadipscing elitr, 
                              sed diam nonumy eirmod tempor invidunt ut labore et 
                              dolore magna aliquyam erat, sed diam voluptua. At vero 
                              eos et accusam et justo duo dolores et ea rebum. Stet 
                              clita kasd gubergren.
                          </p>
                          <div className="feedback-author">
                              <div className="feedback-picture">
                                  <img src="img/feedback-image1.jpg" alt="" className="feedback-image" />
                              </div>
                              <div className="feedback-info">
                                  <div className="feedback-nm"><b>John Smith</b></div>
                                  <div className="feedback-cat">Furniture client</div>
                              </div>
                          </div>
                      </div>
                  </Slider>
              </div>
          </section>
        )
    }
}
