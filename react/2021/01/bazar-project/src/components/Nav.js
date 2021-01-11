import React, { Component } from 'react'

// User menu
function userNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}

// Custom Dropdown
function myDrop() {
    document.getElementById("myDropdown").classList.toggle("show");
}
function myDrop2() {
    document.getElementById("myDropdown2").classList.toggle("show");
}
function myDrop3() {
    document.getElementById("myDropdown3").classList.toggle("show");
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

export default class Nav extends Component {
    render() {
        return (
            <nav>
              <div className="content">
                  <div className="row nav-body">
                      <div className="col-6 nav-left">
                          <ul className="current-list">
                              <li className="current-item">
                                  <div className="dropdown">
                                      <button onClick={myDrop} className="val-links dropbtn">USD</button>
                                      <div id="myDropdown" className="dropdown-content">
                                          <ul className="val-dropdown">
                                              <li className="val-item"><a href="/" className="val-link">USD</a></li>
                                              <li className="val-item"><a href="/" className="val-link">EUR</a></li>
                                              <li className="val-item"><a href="/" className="val-link">RUB</a></li>
                                          </ul>
                                      </div>
                                  </div>
                              </li>
                              <li className="current-item">
                                  <div className="dropdown">
                                      <button onClick={myDrop2} className="val-links dropbtn">English</button>
                                      <div id="myDropdown2" className="dropdown-content">
                                          <ul className="val-dropdown val-dropdown-language">
                                              <li className="val-item"><a href="/" className="val-link">English</a></li>
                                              <li className="val-item"><a href="/" className="val-link">Russian</a></li>
                                              <li className="val-item"><a href="/" className="val-link">Japan</a></li>
                                          </ul>
                                      </div>
                                  </div>
                              </li>
                              <li className="current-item">
                                  <div className="dropdown">
                                      <button onClick={myDrop3} className="val-links dropbtn">Help</button>
                                      <div id="myDropdown3" className="dropdown-content">
                                          <ul className="val-dropdown val-dropdown-language">
                                              <li className="val-item"><a href="/" className="val-link val-link-last">Help</a></li>
                                              <li className="val-item"><a href="/" className="val-link">Info</a></li>
                                              <li className="val-item"><a href="/" className="val-link">More</a></li>
                                          </ul>
                                      </div>
                                  </div>
                              </li>
                          </ul>
                      </div>
                      <div className="col-6 text-right nav-right">
                          <ul className="user-list">
                              <li className="user-item">
                                  <img src="img/user-icon1.png" alt="" className="user-icon" />
                                  <a href="/" className="user-link">Login</a>
                              </li>
                              <li className="user-item">
                                  <img src="img/user-icon2.png" alt="" className="user-icon" />
                                  <a href="/" className="user-link">Register</a>
                              </li>
                              <li className="user-item user-item-more">
                                  <div className="topnav" id="myTopnav">
                                      <a href="javascript:void(0);" className="user-link" onClick={userNav}><img src="img/user-icon3.png" alt="" className="user-icon" /></a>
                                      <ul className="user-more" id="myCollapse">
                                          <li className="more-item"><a href="/" className="more-link active">My Account</a></li>
                                          <li className="more-item"><a href="/" className="more-link">Wish List</a></li>
                                          <li className="more-item"><a href="/" className="more-link">Checkout</a></li>
                                          <li className="more-item"><a href="/" className="more-link">Shopping Cart</a></li>
                                          <li className="more-item"><a href="/" className="more-link">Log Out</a></li>
                                      </ul>
                                  </div>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </nav>
        )
    }
}
