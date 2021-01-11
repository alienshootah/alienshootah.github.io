import React, { Component } from 'react'
import ModalWindow from './ModalWindow';

export default class Header extends Component {
    render() {
        return (
            <header>
              <div className="content">
                  <div className="row header-body">
                      <div className="col-4 header-phone">
                          <div className="phone-body">
                              <div className="phone-image"><img src="img/phone-icon.png" alt="" className="phone-icon" /></div>
                              <div className="phone-num"><a href="tel:+1234567890" className="phone-link">+123 456 78 90</a></div>
                          </div>
                      </div>
                      <div className="col-4 text-center header-log">
                            <ModalWindow />
                      </div>
                      <div className="col-4 text-right">
                          <div className="header-bucket">
                              <a href="/" className="bucket-link"><img src="img/bucket-image.png" alt="" className="bucket-image" /></a>
                              <div className="bucket-round">2</div>
                          </div>
                      </div>
                  </div>
              </div>
          </header>
        )
    }
}
