import React, { Component } from 'react'

export default class Links extends Component {
    render() {
        return (
            <section className="links">
              <div className="content">
                  <h2 className="hidden">Useful links</h2>
                  <div className="row links-body">
                      <div className="col-3">
                          <h3 className="links-title">INFORMATION</h3>
                          <ul className="links-list">
                              <li className="links-item"><a href="/" className="links-link">About us</a></li>
                              <li className="links-item"><a href="/" className="links-link">Privacy</a></li>
                              <li className="links-item"><a href="/" className="links-link">Conditions</a></li>
                              <li className="links-item"><a href="/" className="links-link">Online support</a></li>
                          </ul>
                      </div>
                      <div className="col-3">
                          <h3 className="links-title">MY ACCOUNT</h3>
                          <ul className="links-list">
                              <li className="links-item"><a href="/" className="links-link">Login</a></li>
                              <li className="links-item"><a href="/" className="links-link">My Cart</a></li>
                              <li className="links-item"><a href="/" className="links-link">Wishlist</a></li>
                              <li className="links-item"><a href="/" className="links-link">Checkout</a></li>
                          </ul>
                      </div>
                      <div className="col-3">
                          <h3 className="links-title">INFORMATION</h3>
                          <ul className="links-list">
                              <li className="links-item"><a href="/" className="links-link">Specials</a></li>
                              <li className="links-item"><a href="/" className="links-link">New Products</a></li>
                              <li className="links-item"><a href="/" className="links-link">Best Sellers</a></li>
                              <li className="links-item"><a href="/" className="links-link">Our Stores</a></li>
                          </ul>
                      </div>
                      <div className="col-3">
                          <h3 className="links-title">ORDERS</h3>
                          <ul className="links-list">
                              <li className="links-item"><a href="/" className="links-link">Payment options</a></li>
                              <li className="links-item"><a href="/" className="links-link">hipping and delivery</a></li>
                              <li className="links-item"><a href="/" className="links-link">Returns</a></li>
                              <li className="links-item"><a href="/" className="links-link">Shipping</a></li>
                          </ul>
                          <ul className="visa-list">
                              <li className="visa-item"><img src="img/visa-image1.png" alt="" className="visa-image" /></li>
                              <li className="visa-item"><img src="img/visa-image2.png" alt="" className="visa-image" /></li>
                              <li className="visa-item"><img src="img/visa-image3.png" alt="" className="visa-image" /></li>
                              <li className="visa-item"><img src="img/visa-image4.png" alt="" className="visa-image" /></li>
                              <li className="visa-item"><img src="img/visa-image5.png" alt="" className="visa-image" /></li>
                          </ul>
                      </div>
                  </div>
              </div>
          </section>
        )
    }
}
