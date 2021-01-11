import React, { Component } from 'react'

export default class Promo extends Component {
    render() {
        return (
            <section className="promo">
              <div className="content">
                  <h2 className="hidden">Our actions</h2>
                  <div className="row promo-body">
                      <div className="col-6 promo-big">
                          <div className="promo-picture">
                              <a href="/"><img src="img/promo-image-big.jpg" alt="" className="promo-image-big" /></a>
                              <div className="promo-text">
                                  <div className="promo-container">
                                      <div className="promo-title">Guest room</div>
                                      <div className="promo-what">Sofa</div>
                                      <div className="promo-new">-20%</div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-6 promo-small">
                          <div className="small-item">
                              <a href="/"><img src="img/small-image1.jpg" alt="" className="small-image" /></a>
                              <div className="small-text">
                                  <div className="small-title"><b>Office</b> chair</div>
                                  <div className="small-collect">collection</div>
                                  <div className="small-price">$20.00</div>
                              </div>
                          </div>
                          <div className="small-item small-item-pink">
                              <a href="/"><img src="img/small-image2.jpg" alt="" className="small-image" /></a>
                              <div className="small-text small-text-spec">
                                  <div className="small-title-spec"><b>Special</b> collection</div>
                                  <div className="small-collect-spec">Save up 45% of furniture</div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
        )
    }
}
