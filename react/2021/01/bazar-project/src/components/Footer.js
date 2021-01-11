import React, { Component } from 'react'


export default class Footer extends Component {
    render() {
        return (
            <footer>
              <div className="content footer-body">
                  <div className="text-center footer-copy">© Copyright 2019 <a href="/" className="footer-link">Bazar</a> | All Rights Reserved</div>
                  <ul className="footer-list">
                      <li className="footer-item">
                          <a href="/" className="footer-link"><img src="img/footer-icon1.png" alt="" className="footer-icon" /></a>
                      </li>
                      <li className="footer-item">
                          <a href="/" className="footer-link"><img src="img/footer-icon2.png" alt="" className="footer-icon" /></a>
                      </li>
                      <li className="footer-item">
                          <a href="/" className="footer-link"><img src="img/footer-icon3.png" alt="" className="footer-icon" /></a>
                      </li>
                      <li className="footer-item">
                          <a href="/" className="footer-link"><img src="img/footer-icon4.png" alt="" className="footer-icon" /></a>
                      </li>
                      <li className="footer-item">
                          <a href="/" className="footer-link"><img src="img/footer-icon5.png" alt="" className="footer-icon" /></a>
                      </li>
                      <li className="footer-item">
                          <a href="/" className="footer-link"><img src="img/footer-icon6.png" alt="" className="footer-icon" /></a>
                      </li>
                  </ul>
              </div>
          </footer>
        )
    }
}
