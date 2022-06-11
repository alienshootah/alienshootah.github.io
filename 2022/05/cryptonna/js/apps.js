/* Mobile btn */
const mobileBtn = document.querySelector(".header-mobile-btn");
mobileBtn.addEventListener("click", function() {
  document.querySelector(".header").classList.toggle("show");
});

/* Dropdowns */

// Get all the dropdown from document
document.querySelectorAll('.dropdown-toggle').forEach(dropDownFunc);

// Dropdown Open and Close function
function dropDownFunc(dropDown) {

    if(dropDown.classList.contains('click-dropdown') === true){
        dropDown.addEventListener('click', function (e) {
            e.preventDefault();        
    
            if (this.nextElementSibling.classList.contains('show') === true) {
                // Close the clicked dropdown
                this.parentElement.classList.remove('dropdown-open');
                this.nextElementSibling.classList.remove('show');
    
            } else {
                // Close the opend dropdown
                closeDropdown();
    
                // add the open and active class(Opening the DropDown)
                this.parentElement.classList.add('dropdown-open');
                this.nextElementSibling.classList.add('show');
            }
        });
    }

    if(dropDown.classList.contains('hover-dropdown') === true){

        dropDown.onmouseover  =  dropDown.onmouseout = dropdownHover;

        function dropdownHover(e){
            if(e.type == 'mouseover'){
                // Close the opend dropdown
                closeDropdown();

                // add the open and active class(Opening the DropDown)
                this.parentElement.classList.add('dropdown-open');
                this.nextElementSibling.classList.add('show');
                
            }

            // if(e.type == 'mouseout'){
            //     // close the dropdown after user leave the list
            //     e.target.nextElementSibling.onmouseleave = closeDropdown;
            // }
        }
    }

};


// Listen to the doc click
window.addEventListener('click', function (e) {

    // Close the menu if click happen outside menu
    if (e.target.closest('.nav-drop') === null) {
        // Close the opend dropdown
        closeDropdown();
    }

});


// Close the openend Dropdowns
function closeDropdown() { 
    
    // remove the open and active class from other opened Dropdown (Closing the opend DropDown)
    document.querySelectorAll('.nav-drop').forEach(function (container) { 
        container.classList.remove('dropdown-open')
    });

    document.querySelectorAll('.dropdown-menu').forEach(function (menu) { 
        menu.classList.remove('show');
    });
}

// close the dropdown on mouse out from the dropdown list
document.querySelectorAll('.dropdown-menu').forEach(function (dropDownList) { 
    // close the dropdown after user leave the list
    dropDownList.onmouseleave = closeDropdown;
});

/* Accordeon */

if(document.querySelector(".glad-btn")) {
    var acc = document.getElementsByClassName("glad-btn");
    var i;
  
    for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
        panel.style.display = "none";
        } else {
        panel.style.display = "block";
        }
    });
    }
}

/* Current year */
year = document.querySelector('.footer-date');
year.innerHTML = new Date().getFullYear();

/* Tabs in group */
window.addEventListener("load", function() {
    // store tabs variable
    var theTabs = document.querySelectorAll(".tab-item");
  
    function theTabClicks(tabClickEvent) {
        var clickedTab = tabClickEvent.currentTarget;
        var tabParent = tabClickEvent.currentTarget.parentNode.parentNode.parentNode;
        var theTabs = tabParent.querySelectorAll(".tab-item");
        for (var i = 0; i < theTabs.length; i++) {
            theTabs[i].classList.remove("active");
        }
        
        clickedTab.classList.add("active");
        tabClickEvent.preventDefault();
        var contentPanes = tabParent.querySelectorAll(".tab-content");
        for (i = 0; i < contentPanes.length; i++) {
            contentPanes[i].classList.remove("active");
        }
        var anchorReference = tabClickEvent.target;
        var activePaneId = anchorReference.getAttribute("href");
        var activePane = tabParent.querySelector(activePaneId);
        activePane.classList.add("active");
    }
    for (i = 0; i < theTabs.length; i++) {
        theTabs[i].addEventListener("click", theTabClicks)
    }
});

/* Modals */
let buttons = document.querySelectorAll('.curr-modal');
let modals = document.querySelectorAll('.modal');

function showModal(id) {
  let m = document.getElementById(id);
  m.classList.add('visible');
}

function hideModals() {
  modals.forEach(m => {
    m.classList.remove('visible');
  });
}

buttons.forEach(b => {
  b.addEventListener('click', event => {
    hideModals();
    showModal(b.dataset.modal);
  });
});


/**/
modals.forEach(m => {
  let x = m.querySelector('button.close');
  if (x !== 'modal-body') {
    x.addEventListener('click', hideModals);
  }
});

const nwannonSlider = new Swiper('.nwannon-slider', {
    slidesPerView: 4,
    spaceBetween: 0,
    loop: true,
    navigation: {
      nextEl: '.nwannon-arrow-right',
      prevEl: '.nwannon-arrow-left',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        scrollbar: {
          el: ".nwannon-scrollbar",
        },
      },
      510: {
        slidesPerView: 2,
      },
      750: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      980: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
    },
});

/* Switches in news */

/* Switch btn */
if(document.querySelector(".switch-btn-one")) {
  const switchBtn = document.querySelector(".switch-btn-one");
  switchBtn.addEventListener("click", function() {
    document.querySelector(".news-list").classList.remove("news-super");
    document.querySelector(".switch-icon-one").classList.add("active");
    document.querySelector(".switch-icon-thue").classList.remove("active");
  });
}
if(document.querySelector(".switch-btn-thue")) {
  const switch2Btn = document.querySelector(".switch-btn-thue");
  switch2Btn.addEventListener("click", function() {
    document.querySelector(".news-list").classList.add("news-super");
    document.querySelector(".switch-icon-thue").classList.add("active");
    document.querySelector(".switch-icon-one").classList.remove("active");
  });
}
