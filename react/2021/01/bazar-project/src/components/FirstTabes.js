import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export class FirstTabes extends Component {
    /* Если нужен слайдер с навигацией */
    constructor(props) {
        super(props);
        this.state = {
          nav1: null,
          nav2: null
        };
    }
    componentDidMount() {
        this.setState({
          nav1: this.slider1,
          nav2: this.slider2
        });
    }
    render() {
        const settings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.slider-nav'
        };
        const navigation = {
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: false,
            arrows: true,
            centerMode: true,
            focusOnSelect: true,
            responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 5,
                slidesToScroll: 2,
                infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1
                }
            }
        ]
        };
        return (
            <div>
                <Tabs>
                    <TabList className="gallerry-nav">
                        <Tab className="gall-nav_item">
                            <button className="tablinks gall-nav_link">
                                featured
                            </button>
                        </Tab>
                        <Tab className="gall-nav_item">
                            <button className="tablinks gall-nav_link">
                                top seller
                            </button>
                        </Tab>
                        <Tab className="gall-nav_item">
                            <button className="tablinks gall-nav_link">
                            sale off
                            </button>
                        </Tab>
                        <Tab className="gall-nav_item">
                            <button className="tablinks gall-nav_link">
                                top rated
                            </button>
                        </Tab>
                    </TabList>

                    <TabPanel className="tabcontent">
                    <Slider {...settings} 
                        ref={slider => (this.slider1 = slider)}
                        asNavFor={this.state.nav2} 
                        className="slider-for gallery-slider"
                    >
                        <li className="gallery-item">
                            <div className="gallery-picture">
                                <img src="img/gallery-image.jpg" alt="" className="gallery-image" />
                                <ul className="gallery-icons">
                                    <li className="btns-item"><a href="/" className="btns-link"><img src="img/btns-icon2.png" alt="" className="icons-image" /></a></li>
                                    <li className="btns-item"><a href="/" className="btns-link"><img src="img/btns-icon3.png" alt="" className="icons-image" /></a></li>
                                    <li className="btns-item"><a href="/" className="btns-link"><img src="img/btns-icon1.png" alt="" className="icons-image" /></a></li>
                                    <li className="btns-item"><a href="/" className="btns-link"><img src="img/btns-icon4.png" alt="" className="icons-image" /></a></li>
                                </ul>
                                <div className="gallery-text">
                                    <div className="gallery-num">
                                        <div className="gallery-num-new">$12.00</div>
                                        <div className="gallery-num-old">$16.00</div>
                                    </div>
                                    <div className="gallery-aenean">
                                        <h4 className="deals-bris">Aenean Ru Bristique</h4>
                                        <img src="img/stars.png" alt="" className="deals-stars" />
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="gallery-item">
                            <div className="gallery-picture">
                                <img src="img/gallery-image.jpg" alt="" className="gallery-image" />
                                <ul className="gallery-icons">
                                    <li className="btns-item"><a href="/" className="btns-link"><img src="img/btns-icon2.png" alt="" className="icons-image" /></a></li>
                                    <li className="btns-item"><a href="/" className="btns-link"><img src="img/btns-icon3.png" alt="" className="icons-image" /></a></li>
                                    <li className="btns-item"><a href="/" className="btns-link"><img src="img/btns-icon1.png" alt="" className="icons-image" /></a></li>
                                    <li className="btns-item"><a href="/" className="btns-link"><img src="img/btns-icon4.png" alt="" className="icons-image" /></a></li>
                                </ul>
                                <div className="gallery-text">
                                    <div className="gallery-num">
                                        <div className="gallery-num-new">$12.00</div>
                                        <div className="gallery-num-old">$16.00</div>
                                    </div>
                                    <div className="gallery-aenean">
                                        <h4 className="deals-bris">Aenean Ru Bristique</h4>
                                        <img src="img/stars.png" alt="" className="deals-stars" />
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="gallery-item">
                            <div className="gallery-picture">
                                <img src="img/gallery-image.jpg" alt="" className="gallery-image" />
                                <ul className="gallery-icons">
                                    <li className="btns-item"><a href="/" className="btns-link"><img src="img/btns-icon2.png" alt="" className="icons-image" /></a></li>
                                    <li className="btns-item"><a href="/" className="btns-link"><img src="img/btns-icon3.png" alt="" className="icons-image" /></a></li>
                                    <li className="btns-item"><a href="/" className="btns-link"><img src="img/btns-icon1.png" alt="" className="icons-image" /></a></li>
                                    <li className="btns-item"><a href="/" className="btns-link"><img src="img/btns-icon4.png" alt="" className="icons-image" /></a></li>
                                </ul>
                                <div className="gallery-text">
                                    <div className="gallery-num">
                                        <div className="gallery-num-new">$12.00</div>
                                        <div className="gallery-num-old">$16.00</div>
                                    </div>
                                    <div className="gallery-aenean">
                                        <h4 className="deals-bris">Aenean Ru Bristique</h4>
                                        <img src="img/stars.png" alt="" className="deals-stars" />
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="gallery-item">
                            <div className="gallery-picture">
                                <img src="img/gallery-image.jpg" alt="" className="gallery-image" />
                                <ul className="gallery-icons">
                                    <li className="btns-item"><a href="/" className="btns-link"><img src="img/btns-icon2.png" alt="" className="icons-image" /></a></li>
                                    <li className="btns-item"><a href="/" className="btns-link"><img src="img/btns-icon3.png" alt="" className="icons-image" /></a></li>
                                    <li className="btns-item"><a href="/" className="btns-link"><img src="img/btns-icon1.png" alt="" className="icons-image" /></a></li>
                                    <li className="btns-item"><a href="/" className="btns-link"><img src="img/btns-icon4.png" alt="" className="icons-image" /></a></li>
                                </ul>
                                <div className="gallery-text">
                                    <div className="gallery-num">
                                        <div className="gallery-num-new">$12.00</div>
                                        <div className="gallery-num-old">$16.00</div>
                                    </div>
                                    <div className="gallery-aenean">
                                        <h4 className="deals-bris">Aenean Ru Bristique</h4>
                                        <img src="img/stars.png" alt="" className="deals-stars" />
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="gallery-item">
                            <div className="gallery-picture">
                                <img src="img/gallery-image.jpg" alt="" className="gallery-image" />
                                <ul className="gallery-icons">
                                    <li className="btns-item"><a href="/" className="btns-link"><img src="img/btns-icon2.png" alt="" className="icons-image" /></a></li>
                                    <li className="btns-item"><a href="/" className="btns-link"><img src="img/btns-icon3.png" alt="" className="icons-image" /></a></li>
                                    <li className="btns-item"><a href="/" className="btns-link"><img src="img/btns-icon1.png" alt="" className="icons-image" /></a></li>
                                    <li className="btns-item"><a href="/" className="btns-link"><img src="img/btns-icon4.png" alt="" className="icons-image" /></a></li>
                                </ul>
                                <div className="gallery-text">
                                    <div className="gallery-num">
                                        <div className="gallery-num-new">$12.00</div>
                                        <div className="gallery-num-old">$16.00</div>
                                    </div>
                                    <div className="gallery-aenean">
                                        <h4 className="deals-bris">Aenean Ru Bristique</h4>
                                        <img src="img/stars.png" alt="" className="deals-stars" />
                                    </div>
                                </div>
                            </div>
                        </li>
                    </Slider>
                    <Slider {...navigation} 
                        ref={slider => (this.slider2 = slider)}
                        asNavFor={this.state.nav1} 
                        className="slider-nav"
                    >
                        <li className="slider-nav_item"><img src="img/gallery-image.jpg" alt="" className="slider-nav_image" /></li>
                        <li className="slider-nav_item"><img src="img/gallery-image.jpg" alt="" className="slider-nav_image" /></li>
                        <li className="slider-nav_item"><img src="img/gallery-image.jpg" alt="" className="slider-nav_image" /></li>
                        <li className="slider-nav_item"><img src="img/gallery-image.jpg" alt="" className="slider-nav_image" /></li>
                        <li className="slider-nav_item"><img src="img/gallery-image.jpg" alt="" className="slider-nav_image" /></li>
                    </Slider>
                    </TabPanel>
                    <TabPanel className="tabcontent">
                    <p>
                        tab seller tab seller tab seller tab seller tab seller tab seller tab seller
                        tab seller tab seller tab seller tab seller tab seller tab seller tab seller
                        tab seller tab seller tab seller tab seller tab seller tab seller tab seller
                        tab seller tab seller tab seller tab seller tab seller tab seller tab seller
                        tab seller tab seller tab seller tab seller tab seller tab seller tab seller
                        tab seller tab seller tab seller tab seller tab seller tab seller tab seller
                    </p>
                    </TabPanel>
                    <TabPanel className="tabcontent">
                        sale off
                    </TabPanel>
                    <TabPanel className="tabcontent">
                        <p>top rated</p>
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}

export default FirstTabes
