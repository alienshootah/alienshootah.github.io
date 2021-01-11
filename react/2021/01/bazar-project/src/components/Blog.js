import React, { Component } from 'react'

export default class Blog extends Component {
    render() {
        return (
            <section className="blog">
              <div className="content">
                  <div className="gallery-title blog-title">
                      <h2 className="catalog-nw">Latest blog</h2>
                  </div>
                  <ul className="blog-list">
                      <li className="blog-item">
                          <div className="blog-picture">
                              <a href="/"><img src="img/blog-image1.jpg" alt="" className="blog-image" /></a>
                              <div className="blog-date">
                                  <div className="blog-dmy"><img src="img/dmy-icon.png" alt="" className="dmy-icon" /> 15 JAN 2019</div>
                                  <div className="blog-comments"><img src="img/comments-icon.png" alt="" className="dmy-icon" /> 4 Comments</div>
                              </div>
                          </div>
                          <div className="blog-text">
                              <h3 className="blog-ttl">Products That Fight Static</h3>
                              <p className="blog-typ">
                                  Aliquam dictum pellentesque nibh sit amet dapibus. 
                                  Vivamus eget luctus nisi. Nullam euismod leo vehicula, rutrum magna in, 
                                  ornare enim vehicula, rutrum magna in, ornare enim.
                              </p>
                              <div className="blog-more">
                                  <a href="/" className="blog-more-link active">Read more</a>
                              </div>
                          </div>
                      </li>
                      <li className="blog-item">
                          <div className="blog-picture">
                              <a href="/"><img src="img/blog-image3.jpg" alt="" className="blog-image" /></a>
                              <div className="blog-date">
                                  <div className="blog-dmy"><img src="img/dmy-icon.png" alt="" className="dmy-icon" /> 15 JAN 2019</div>
                                  <div className="blog-comments"><img src="img/comments-icon.png" alt="" className="dmy-icon" /> 4 Comments</div>
                              </div>
                          </div>
                          <div className="blog-text">
                              <h3 className="blog-ttl">Products That Fight Static</h3>
                              <p className="blog-typ">
                                  Aliquam dictum pellentesque nibh sit amet dapibus. 
                                  Vivamus eget luctus nisi. Nullam euismod leo vehicula, rutrum magna in, 
                                  ornare enim vehicula, rutrum magna in, ornare enim.
                              </p>
                              <div className="blog-more">
                                  <a href="/" className="blog-more-link">Read more</a>
                              </div>
                          </div>
                      </li>
                      <li className="blog-item">
                          <div className="blog-picture">
                              <a href="/"><img src="img/blog-image2.jpg" alt="" className="blog-image" /></a>
                              <div className="blog-date">
                                  <div className="blog-dmy"><img src="img/dmy-icon.png" alt="" className="dmy-icon" /> 15 JAN 2019</div>
                                  <div className="blog-comments"><img src="img/comments-icon.png" alt="" className="dmy-icon" /> 4 Comments</div>
                              </div>
                          </div>
                          <div className="blog-text">
                              <h3 className="blog-ttl">Products That Fight Static</h3>
                              <p className="blog-typ">
                                  Aliquam dictum pellentesque nibh sit amet dapibus. 
                                  Vivamus eget luctus nisi. Nullam euismod leo vehicula, rutrum magna in, 
                                  ornare enim vehicula, rutrum magna in, ornare enim.
                              </p>
                              <div className="blog-more">
                                  <a href="/" className="blog-more-link">Read more</a>
                              </div>
                          </div>
                      </li>
                  </ul>
              </div>
          </section>
        )
    }
}
