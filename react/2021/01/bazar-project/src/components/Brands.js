import React, { Component } from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default class Brands extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 6,
            slidesToScroll: 3,
            responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
            ]
        };
        return (
            <section className="brands">
              <div className="content">
                  <h2 className="hidden">Brands in our magazine</h2>
                  <Slider {...settings} className="brands-list responsive">
                      <li className="brands-item"><a href="/"><img src="img/brands-image1.png" alt="" className="brands-image" /></a></li>
                      <li className="brands-item"><a href="/"><img src="img/brands-image2.png" alt="" className="brands-image" /></a></li>
                      <li className="brands-item"><a href="/"><img src="img/brands-image3.png" alt="" className="brands-image" /></a></li>
                      <li className="brands-item"><a href="/"><img src="img/brands-image4.png" alt="" className="brands-image" /></a></li>
                      <li className="brands-item"><a href="/"><img src="img/brands-image5.png" alt="" className="brands-image" /></a></li>
                      <li className="brands-item"><a href="/"><img src="img/brands-image6.png" alt="" className="brands-image" /></a></li>
                      <li className="brands-item"><a href="/"><img src="img/brands-image1.png" alt="" className="brands-image" /></a></li>
                      <li className="brands-item"><a href="/"><img src="img/brands-image2.png" alt="" className="brands-image" /></a></li>
                      <li className="brands-item"><a href="/"><img src="img/brands-image3.png" alt="" className="brands-image" /></a></li>
                      <li className="brands-item"><a href="/"><img src="img/brands-image4.png" alt="" className="brands-image" /></a></li>
                      <li className="brands-item"><a href="/"><img src="img/brands-image5.png" alt="" className="brands-image" /></a></li>
                      <li className="brands-item"><a href="/"><img src="img/brands-image6.png" alt="" className="brands-image" /></a></li>
                  </Slider>
              </div>
          </section>
        )
    }
}
