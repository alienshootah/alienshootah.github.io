import React, { Component } from 'react'

function myDrop4() {
    document.getElementById("myDropdown4").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
      }
      }
  }
}

export default class Search extends Component {
    render() {
        return (
            <section className="search">
              <div className="content">
                  <h2 className="hidden">Select a category</h2>
                  <div className="row search-body">
                      <div className="col-6 search-fields">
                          <div className="fields-body">
                              <div className="fields-cat">
                                  <select className="sel-field">
                                      <option>Select a category</option>
                                      <option>Category 1</option>
                                      <option>Category 2</option>
                                      <option>Category 3</option>
                                      <option>Category 4</option>
                                      <option>Category 5</option>
                                  </select>
                              </div>
                              <div className="fields-search">
                                  <input type="text" className="search-field" placeholder="Search products..." />
                                  <button className="search-button">
                                      <img src="img/search-icon.png" alt="" className="search-icon" />
                                  </button>
                              </div>
                          </div>
                      </div>
                      <div className="col-6 search-menu">
                          <div className="nav-wrapper">
                              <ul className="nav-list">
                                  <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
                                  <li className="nav-item">
                                      <div className="dropdown">
                                          <a href="javascript:void(0);" onClick={myDrop4} className="nav-link dropbtn">Furniture</a>
                                          <div id="myDropdown4" className="dropdown-content">
                                              <div className="nav-dropdown">
                                                  <div className="nav-drop_item">
                                                      <h3 className="nav-drop_title">CAMCORDERS</h3>
                                                      <ul className="drop-list">
                                                          <li className="drop-list_item"><a href="/" className="drop-link">Apple</a></li>
                                                          <li className="drop-list_item"><a href="/" className="drop-link">HTC</a></li>
                                                          <li className="drop-list_item"><a href="/" className="drop-link">Samsung</a></li>
                                                          <li className="drop-list_item"><a href="/" className="drop-link">BlackBerry</a></li>
                                                          <li className="drop-list_item"><a href="/" className="drop-link">Nokia</a></li>
                                                          <li className="drop-list_item"><a href="/" className="drop-link">Motorola</a></li>
                                                      </ul>
                                                  </div>
                                                  <div className="nav-drop_item">
                                                      <h3 className="nav-drop_title">CAMCORDERS</h3>
                                                      <ul className="drop-list">
                                                          <li className="drop-list_item"><a href="/" className="drop-link">Apple</a></li>
                                                          <li className="drop-list_item"><a href="/" className="drop-link">HTC</a></li>
                                                          <li className="drop-list_item"><a href="/" className="drop-link">Samsung</a></li>
                                                          <li className="drop-list_item"><a href="/" className="drop-link">BlackBerry</a></li>
                                                          <li className="drop-list_item"><a href="/" className="drop-link">Nokia</a></li>
                                                          <li className="drop-list_item"><a href="/" className="drop-link">Motorola</a></li>
                                                      </ul>
                                                  </div>
                                                  <div className="nav-drop_item">
                                                      <h3 className="nav-drop_title">CAMCORDERS</h3>
                                                      <ul className="drop-list">
                                                          <li className="drop-list_item"><a href="/" className="drop-link">Apple</a></li>
                                                          <li className="drop-list_item"><a href="/" className="drop-link">HTC</a></li>
                                                          <li className="drop-list_item"><a href="/" className="drop-link">Samsung</a></li>
                                                          <li className="drop-list_item"><a href="/" className="drop-link">BlackBerry</a></li>
                                                          <li className="drop-list_item"><a href="/" className="drop-link">Nokia</a></li>
                                                          <li className="drop-list_item"><a href="/" className="drop-link">Motorola</a></li>
                                                      </ul>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </li>
                                  <li className="nav-item"><a href="/" className="nav-link">Chair</a></li>
                                  <li className="nav-item"><a href="/" className="nav-link">Table</a></li>
                                  <li className="nav-item"><a href="/" className="nav-link">Sofa</a></li>
                                  <li className="nav-item"><a href="/" className="nav-link">Bedroom</a></li>
                                  <li className="nav-item"><a href="/" className="nav-link">Blog</a></li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
        )
    }
}
