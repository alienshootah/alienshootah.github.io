import React, { Component } from 'react'
import SecondTabes from './SecondTabes';

export default class Catalog extends Component {
    render() {
        return (
            <section className="catalog">
              <div className="content">
                  <div className="catalog-title">
                      <div className="catalog-dec">
                          <h2 className="catalog-nw">New furniture</h2>
                      </div>
                      <SecondTabes />
                  </div>
                  
              </div>
          </section>
        )
    }
}
