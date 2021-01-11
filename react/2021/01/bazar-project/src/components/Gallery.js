import React, { Component } from 'react'
import FirstTabes from './FirstTabes';

export default class Gallery extends Component {
    render() {
        return (
            <section className="gallery">
              <div className="content">
                  <div className="gallery-title">
                      <h2 className="catalog-nw">Furniture gallery</h2>
                  </div>
                  
                  <div className="row gallery-body">
                      <div className="col-6 gallery-left">
                          <FirstTabes />
                      </div>

                      <div className="col-6 gallery-right">
                          <div className="gall-right_picture">
                              <img src="img/gall-right_image.jpg" alt="" className="gall-right_image" />
                              <div className="gall-right_text">
                                  <div className="gall-text_price">FROM <b>$50.80</b></div>
                                  <div className="gall-text_desc">Bedroom Bed</div>
                                  <div className="gall-text_btn"><a href="/" className="gall-text_link">Shop now</a></div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
        )
    }
}
