import React, { Component } from 'react'

export default class Prefer extends Component {
    render() {
        return (
            <section className="prefer">
              <div className="content">
                  <h2 className="hidden">What we can do</h2>
                  <div className="row prefer-body">
                      <div className="col-3 prefer-item">
                          <div className="prefer-picture">
                              <div className="prefer-image"><img src="img/prefer-icon1.png" alt="" className="prefer-icon" /></div>
                          </div>
                          <h3 className="prefer-title">Free shipping</h3>
                          <p className="prefer-text">All order</p>
                      </div>
                      <div className="col-3 prefer-item">
                          <div className="prefer-picture">
                              <div className="prefer-image"><img src="img/prefer-icon2.png" alt="" className="prefer-icon" /></div>
                          </div>
                          <h3 className="prefer-title">24/7 Customer</h3>
                          <p className="prefer-text">Support</p>
                      </div>
                      <div className="col-3 prefer-item">
                          <div className="prefer-picture">
                              <div className="prefer-image"><img src="img/prefer-icon3.png" alt="" className="prefer-icon" /></div>
                          </div>
                          <h3 className="prefer-title">Money back</h3>
                          <p className="prefer-text">Guarantee</p>
                      </div>
                      <div className="col-3 prefer-item">
                          <div className="prefer-picture">
                              <div className="prefer-image"><img src="img/prefer-icon4.png" alt="" className="prefer-icon" /></div>
                          </div>
                          <h3 className="prefer-title">Member discount</h3>
                          <p className="prefer-text">First order</p>
                      </div>
                  </div>
              </div>
          </section>
        )
    }
}
