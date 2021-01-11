import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export class SecondTabes extends Component {
    render() {
        return (
            <div className="cat-menu">
                <Tabs>
                    <div className="cat-menu">
                        <TabList className="tab cat-list">
                            <Tab className="cat-item">
                                <button className="cat-link tablinks2">
                                 Bed
                                </button>
                            </Tab>
                            <Tab className="cat-item">
                                <button className="cat-link tablinks2">
                                 Chair
                                </button>
                            </Tab>
                            <Tab className="cat-item">
                                <button className="cat-link tablinks2">
                                 Sofa
                                </button>
                            </Tab>
                            <Tab className="cat-item">
                                <button className="cat-link tablinks2">
                                 Table
                                </button>
                            </Tab>
                            <Tab className="cat-item">
                                <button className="cat-link tablinks2">
                                 Dining
                                </button>
                            </Tab>
                        </TabList>
                    </div>
                    <TabPanel className="tabcontent2">
                        <ul className="catalog-body">
                          <li className="catalog-item">
                              <div className="catalog-picture">
                                  <img src="img/catalog-image1.jpg" alt="" className="catalog-image" />
                                  <div className="catalog-buttons">
                                      <button className="add-button catalog-btn ">Quick view</button>
                                      <button className="add-button catalog-btn">
                                          <img src="img/add-button.png" className="add-icon" alt="" /> Add to card
                                      </button>
                                  </div>
                              </div>
                              <div className="deals-container">
                                  <h4 className="text-center deals-bris">Aenean Ru Bristique</h4>
                                  <div className="stars-wrap">
                                      <img src="img/stars.png" alt="" className="deals-stars" />
                                  </div>
                                  <div className="deals-btns">
                                      <div className="btns-left">
                                          <ul className="btns-list">
                                              <li className="btns-item">
                                                  <a href="/" className="btns-link"><img src="img/btns-icon2.png" alt="" className="btns-icon" /></a>
                                              </li>
                                              <li className="btns-item">
                                                  <a href="/" className="btns-link"><img src="img/btns-icon3.png" alt="" className="btns-icon" /></a>
                                              </li>
                                          </ul>
                                      </div>
                                      <div className="btns-right">
                                          <div className="btns-price-old">$35</div>
                                          <div className="btns-price-new">$30</div>
                                      </div>
                                  </div>
                              </div>
                          </li>
                          <li className="catalog-item">
                              <div className="catalog-picture">
                                  <div className="catalog-sale"><span>Sale</span></div>
                                  <a href="/"><img src="img/catalog-image2.jpg" alt="" className="catalog-image" /></a>
                                  <div className="catalog-buttons">
                                      <button className="add-button catalog-btn ">Quick view</button>
                                      <button className="add-button catalog-btn">
                                          <img src="img/add-button.png" className="add-icon" alt="" /> Add to card
                                      </button>
                                  </div>
                              </div>
                              <div className="deals-container">
                                  <h4 className="text-center deals-bris">Aenean Ru Bristique</h4>
                                  <div className="stars-wrap">
                                      <img src="img/stars.png" alt="" className="deals-stars" />
                                  </div>
                                  <div className="deals-btns">
                                      <div className="btns-left">
                                          <ul className="btns-list">
                                              <li className="btns-item">
                                                  <a href="/" className="btns-link"><img src="img/btns-icon2.png" alt="" className="btns-icon" /></a>
                                              </li>
                                              <li className="btns-item">
                                                  <a href="/" className="btns-link"><img src="img/btns-icon3.png" alt="" className="btns-icon" /></a>
                                              </li>
                                          </ul>
                                      </div>
                                      <div className="btns-right">
                                          <div className="btns-price-old">$35</div>
                                          <div className="btns-price-new">$30</div>
                                      </div>
                                  </div>
                              </div>
                          </li>
                          <li className="catalog-item">
                              <div className="catalog-picture">
                                  <a href="/"><img src="img/catalog-image3.jpg" alt="" className="catalog-image" /></a>
                                  <div className="catalog-buttons">
                                      <button className="add-button catalog-btn ">Quick view</button>
                                      <button className="add-button catalog-btn">
                                          <img src="img/add-button.png" className="add-icon" alt="" /> Add to card
                                      </button>
                                  </div>
                              </div>
                              <div className="deals-container">
                                  <h4 className="text-center deals-bris">Aenean Ru Bristique</h4>
                                  <div className="stars-wrap">
                                      <img src="img/stars.png" alt="" className="deals-stars" />
                                  </div>
                                  <div className="deals-btns">
                                      <div className="btns-left">
                                          <ul className="btns-list">
                                              <li className="btns-item">
                                                  <a href="/" className="btns-link"><img src="img/btns-icon2.png" alt="" className="btns-icon" /></a>
                                              </li>
                                              <li className="btns-item">
                                                  <a href="/" className="btns-link"><img src="img/btns-icon3.png" alt="" className="btns-icon" /></a>
                                              </li>
                                          </ul>
                                      </div>
                                      <div className="btns-right">
                                          <div className="btns-price-old">$35</div>
                                          <div className="btns-price-new">$30</div>
                                      </div>
                                  </div>
                              </div>
                          </li>
                          <li className="catalog-item">
                              <div className="catalog-picture">
                                  <div className="catalog-sale"><span>Sale</span></div>
                                  <a href="/"><img src="img/catalog-image4.jpg" alt="" className="catalog-image" /></a>
                                  <div className="catalog-buttons">
                                      <button className="add-button catalog-btn ">Quick view</button>
                                      <button className="add-button catalog-btn">
                                          <img src="img/add-button.png" className="add-icon" alt="" /> Add to card
                                      </button>
                                  </div>
                              </div>
                              <div className="deals-container">
                                  <h4 className="text-center deals-bris">Aenean Ru Bristique</h4>
                                  <div className="stars-wrap">
                                      <img src="img/stars.png" alt="" className="deals-stars" />
                                  </div>
                                  <div className="deals-btns">
                                      <div className="btns-left">
                                          <ul className="btns-list">
                                              <li className="btns-item">
                                                  <a href="/" className="btns-link"><img src="img/btns-icon2.png" alt="" className="btns-icon" /></a>
                                              </li>
                                              <li className="btns-item">
                                                  <a href="/" className="btns-link"><img src="img/btns-icon3.png" alt="" className="btns-icon" /></a>
                                              </li>
                                          </ul>
                                      </div>
                                      <div className="btns-right">
                                          <div className="btns-price-old">$35</div>
                                          <div className="btns-price-new">$30</div>
                                      </div>
                                  </div>
                              </div>
                          </li>
                          <li className="catalog-item">
                              <div className="catalog-picture">
                                  <a href="/"><img src="img/catalog-image5.jpg" alt="" className="catalog-image" /></a>
                                  <div className="catalog-buttons">
                                      <button className="add-button catalog-btn ">Quick view</button>
                                      <button className="add-button catalog-btn">
                                          <img src="img/add-button.png" className="add-icon" alt="" /> Add to card
                                      </button>
                                  </div>
                              </div>
                              <div className="deals-container">
                                  <h4 className="text-center deals-bris">Aenean Ru Bristique</h4>
                                  <div className="stars-wrap">
                                      <img src="img/stars.png" alt="" className="deals-stars" />
                                  </div>
                                  <div className="deals-btns">
                                      <div className="btns-left">
                                          <ul className="btns-list">
                                              <li className="btns-item">
                                                  <a href="/" className="btns-link"><img src="img/btns-icon2.png" alt="" className="btns-icon" /></a>
                                              </li>
                                              <li className="btns-item">
                                                  <a href="/" className="btns-link"><img src="img/btns-icon3.png" alt="" className="btns-icon" /></a>
                                              </li>
                                          </ul>
                                      </div>
                                      <div className="btns-right">
                                          <div className="btns-price-old">$35</div>
                                          <div className="btns-price-new">$30</div>
                                      </div>
                                  </div>
                              </div>
                          </li>
                          <li className="catalog-item">
                              <div className="catalog-picture">
                                  <div className="catalog-sale"><span>Sale</span></div>
                                  <a href="/"><img src="img/catalog-image6.jpg" alt="" className="catalog-image" /></a>
                                  <div className="catalog-buttons">
                                      <button className="add-button catalog-btn ">Quick view</button>
                                      <button className="add-button catalog-btn">
                                          <img src="img/add-button.png" className="add-icon" alt="" /> Add to card
                                      </button>
                                  </div>
                              </div>
                              <div className="deals-container">
                                  <h4 className="text-center deals-bris">Aenean Ru Bristique</h4>
                                  <div className="stars-wrap">
                                      <img src="img/stars.png" alt="" className="deals-stars" />
                                  </div>
                                  <div className="deals-btns">
                                      <div className="btns-left">
                                          <ul className="btns-list">
                                              <li className="btns-item">
                                                  <a href="/" className="btns-link"><img src="img/btns-icon2.png" alt="" className="btns-icon" /></a>
                                              </li>
                                              <li className="btns-item">
                                                  <a href="/" className="btns-link"><img src="img/btns-icon3.png" alt="" className="btns-icon" /></a>
                                              </li>
                                          </ul>
                                      </div>
                                      <div className="btns-right">
                                          <div className="btns-price-old">$35</div>
                                          <div className="btns-price-new">$30</div>
                                      </div>
                                  </div>
                              </div>
                          </li>
                          <li className="catalog-item">
                              <div className="catalog-picture">
                                  <a href="/"><img src="img/catalog-image7.jpg" alt="" className="catalog-image" /></a>
                                  <div className="catalog-buttons">
                                      <button className="add-button catalog-btn ">Quick view</button>
                                      <button className="add-button catalog-btn">
                                          <img src="img/add-button.png" className="add-icon" alt="" /> Add to card
                                      </button>
                                  </div>
                              </div>
                              <div className="deals-container">
                                  <h4 className="text-center deals-bris">Aenean Ru Bristique</h4>
                                  <div className="stars-wrap">
                                      <img src="img/stars.png" alt="" className="deals-stars" />
                                  </div>
                                  <div className="deals-btns">
                                      <div className="btns-left">
                                          <ul className="btns-list">
                                              <li className="btns-item">
                                                  <a href="/" className="btns-link"><img src="img/btns-icon2.png" alt="" className="btns-icon" /></a>
                                              </li>
                                              <li className="btns-item">
                                                  <a href="/" className="btns-link"><img src="img/btns-icon3.png" alt="" className="btns-icon" /></a>
                                              </li>
                                          </ul>
                                      </div>
                                      <div className="btns-right">
                                          <div className="btns-price-old">$35</div>
                                          <div className="btns-price-new">$30</div>
                                      </div>
                                  </div>
                              </div>
                          </li>
                          <li className="catalog-item">
                              <div className="catalog-picture">
                                  <div className="catalog-sale"><span>Sale</span></div>
                                  <a href="/"><img src="img/catalog-image8.jpg" alt="" className="catalog-image" /></a>
                                  <div className="catalog-buttons">
                                      <button className="add-button catalog-btn ">Quick view</button>
                                      <button className="add-button catalog-btn">
                                          <img src="img/add-button.png" className="add-icon" alt="" /> Add to card
                                      </button>
                                  </div>
                              </div>
                              <div className="deals-container">
                                  <h4 className="text-center deals-bris">Aenean Ru Bristique</h4>
                                  <div className="stars-wrap">
                                      <img src="img/stars.png" alt="" className="deals-stars" />
                                  </div>
                                  <div className="deals-btns">
                                      <div className="btns-left">
                                          <ul className="btns-list">
                                              <li className="btns-item">
                                                  <a href="/" className="btns-link"><img src="img/btns-icon2.png" alt="" className="btns-icon" /></a>
                                              </li>
                                              <li className="btns-item">
                                                  <a href="/" className="btns-link"><img src="img/btns-icon3.png" alt="" className="btns-icon" /></a>
                                              </li>
                                          </ul>
                                      </div>
                                      <div className="btns-right">
                                          <div className="btns-price-old">$35</div>
                                          <div className="btns-price-new">$30</div>
                                      </div>
                                  </div>
                              </div>
                          </li>
                      </ul>
                    </TabPanel>
                    <TabPanel className="tabcontent2">
                        Chair
                    </TabPanel>
                    <TabPanel className="tabcontent2">
                        Sofa
                    </TabPanel>
                    <TabPanel className="tabcontent2">
                        Table
                    </TabPanel>
                    <TabPanel className="tabcontent2">
                        Dining
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}

export default SecondTabes
