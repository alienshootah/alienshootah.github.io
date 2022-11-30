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

/* Sliders */

// Promo slider
var totalSlide = $('.promo-slider .swiper-slide').length;
const promoSlider = new Swiper('.promo-slider', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  navigation: {
    nextEl: '.promo-arrow-right',
    prevEl: '.promo-arrow-left',
  },
  pagination: {
    el: ".promo-scroll",
    type: "progressbar",
  },
  on: {
    init: function () {
      var fragment = document.querySelector('.promo-frac');
      fragment.innerHTML = ("<span class='promo-frac-start'>" + '0' + 1 +  "</span>" + 
      "<span class='promo-frac-end'>" + '0' + totalSlide +  "</span>");
    },
  },
});

promoSlider.on('slideChange', function() {
  var fragment = document.querySelector('.promo-frac');
  var current = promoSlider.realIndex + 1;
  if (current > totalSlide)
    current = 1;
  var idx = current < 10 ? ("0" + current) : current;
  var tdx = totalSlide < 10 ? ("0" + totalSlide) : totalSlide;
  fragment.innerHTML = ("<span class='promo-frac-start'>" + idx +  "</span>" + 
  "<span class='promo-frac-end'>" + tdx +  "</span>"
  );
});

// Products slider
var totalSlide2 = $('.products-slider .swiper-slide').length;
const productsSlider = new Swiper('.products-slider', {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  freeMode: true,
  navigation: {
    nextEl: '.products-arrow-right',
    prevEl: '.products-arrow-left',
  },
  pagination: {
    el: ".products-scroll",
    type: "progressbar",
  },
  scrollbar: {
    el: ".products-indicator",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      scrollbar: {
        el: ".nwannon-scrollbar",
      },
    },
    750: {
      slidesPerView: 2,
    },
    980: {
      slidesPerView: 2,
    },
    1180: {
      slidesPerView: 3,
    },
    1360: {
      slidesPerView: 4,
    },
  },
  mousewheel: true,
  on: {
    init: function () {
      var fragment2 = document.querySelector('.products-frac');
      fragment2.innerHTML = ("<span class='products-frac-start'>" + '0' + 1 +  "</span>" + 
      "<span class='products-frac-end'>" + '0' + totalSlide2 +  "</span>");
    },
  },
});

productsSlider.on('slideChange', function() {
  var fragment2 = document.querySelector('.products-frac');
  var current = productsSlider.realIndex + 1;
  if (current > totalSlide2)
    current = 1;
  var idx = current < 10 ? ("0" + current) : current;
  var tdx = totalSlide2 < 10 ? ("0" + totalSlide2) : totalSlide2;
  fragment2.innerHTML = ("<span class='products-frac-start'>" + idx +  "</span>" + 
  "<span class='products-frac-end'>" + tdx +  "</span>"
  );
});


// Partners slider
var totalSlide3 = $('.partners-slider .swiper-slide').length;
const partnersSlider = new Swiper('.partners-slider', {
  slidesPerView: 2,
  grid: {
    rows: 3,
    fill: "row",
  },
  navigation: {
    nextEl: '.partners-arrow-right',
    prevEl: '.partners-arrow-left',
  },
  pagination: {
    el: ".partners-scroll",
    type: "progressbar",
  },
  scrollbar: {
    el: ".partners-indicator",
    clickable: true,
  },
  mousewheel: true,
  on: {
    init: function () {
      var fragment3 = document.querySelector('.partners-frac');
      fragment3.innerHTML = ("<span class='partners-frac-start'>" + '0' + 1 +  "</span>" + 
      "<span class='partners-frac-end'>" + totalSlide3 +  "</span>");
    },
  },
});

partnersSlider.on('slideChange', function() {
  var fragment3 = document.querySelector('.partners-frac');
  var current = partnersSlider.realIndex + 1;
  if (current > totalSlide3)
    current = 1;
  var idx = current < 10 ? ("0" + current) : current;
  var tdx = totalSlide3 < 10 ? ("0" + totalSlide3) : totalSlide3;
  fragment3.innerHTML = ("<span class='partners-frac-start'>" + idx +  "</span>" + 
  "<span class='partners-frac-end'>" + tdx +  "</span>"
  );
});


/* Current year */
year = document.querySelector('.footer-date');
year.innerHTML = new Date().getFullYear();