/* Menu btn */
const menuBtn = document.querySelector(".header-mobile-btn");
menuBtn.addEventListener("click", function() {
  document.querySelector(".detail").classList.toggle("show");
});

/* Close menu btn */
const closeMenuBtn = document.querySelector(".detail-close-btn1");
closeMenuBtn.addEventListener("click", function() {
  document.querySelector(".detail").classList.toggle("show");
});

/* Close menu btn 2 */
const closeMenuBtn2 = document.querySelector(".detail-close-btn2");
closeMenuBtn2.addEventListener("click", function() {
  document.querySelector(".detail").classList.toggle("show");
});

/* Social btn */
const langBtn = document.querySelector(".header-link-social");
langBtn.addEventListener("click", function() {
  document.querySelector(".drop").classList.toggle("show");
});

/* Language btn */
const socialBtn = document.querySelector(".lang-link");
socialBtn.addEventListener("click", function() {
  document.querySelector(".lang-drop").classList.toggle("show");
});

/* More btn */
if(document.querySelector(".faion-more-btn")) {
  const moreBtn = document.querySelector(".faion-more-btn");
  moreBtn.addEventListener("click", function() {
    document.querySelector(".faion-drop").classList.toggle("show");
    if(document.querySelector(".faion-drop.show")) {
      document.querySelector(".faion-more-btn").textContent="Показать меньше";
    } 
    else {
      document.querySelector(".faion-more-btn").textContent="Показать больше";
    }
  });
}

/* More btn in team thue */
if(document.querySelector(".public-more-btn")) {
  const moreBtn = document.querySelector(".public-more-btn");
  moreBtn.addEventListener("click", function() {
    document.querySelector(".public-show").classList.toggle("visible");
    if(document.querySelector(".public-show.visible")) {
      document.querySelector(".public-more-btn").textContent="Показать меньше";
    } 
    else {
      document.querySelector(".public-more-btn").textContent="Показать больше";
    }
  });
}



/* Tabs in menu */

var $tabs = function (target) {
    var
      _elemTabs = (typeof target === 'string' ? document.querySelector(target) : target),
      _eventTabsShow,
      _showTab = function (tabsLinkTarget) {
        var tabsPaneTarget, tabsLinkActive, tabsPaneShow;
        tabsPaneTarget = document.querySelector(tabsLinkTarget.getAttribute('href'));
        tabsLinkActive = tabsLinkTarget.parentElement.querySelector('.detail-btn-active');
        tabsPaneShow = tabsPaneTarget.parentElement.querySelector('.tabes-content-show');
        // если следующая вкладка равна активной, то завершаем работу
        if (tabsLinkTarget === tabsLinkActive) {
          return;
        }
        // удаляем классы у текущих активных элементов
        if (tabsLinkActive !== null) {
          tabsLinkActive.classList.remove('detail-btn-active');
        }
        if (tabsPaneShow !== null) {
          tabsPaneShow.classList.remove('tabes-content-show');
        }
        // добавляем классы к элементам (в завимости от выбранной вкладки)
        tabsLinkTarget.classList.add('detail-btn-active');
        tabsPaneTarget.classList.add('tabes-content-show');
        document.dispatchEvent(_eventTabsShow);
      },
      _switchTabTo = function (tabsLinkIndex) {
        var tabsLinks = _elemTabs.querySelectorAll('.detail-btn');
        if (tabsLinks.length > 0) {
          if (tabsLinkIndex > tabsLinks.length) {
            tabsLinkIndex = tabsLinks.length;
          } else if (tabsLinkIndex < 1) {
            tabsLinkIndex = 1;
          }
          _showTab(tabsLinks[tabsLinkIndex - 1]);
        }
      };

    _eventTabsShow = new CustomEvent('tab.show', { detail: _elemTabs });

    _elemTabs.addEventListener('click', function(e) {
      var target = e.target.closest('.detail-btn');
      // завершаем выполнение функции, если кликнули не по ссылке
      if (!target) {
        return;
      }
      // отменяем стандартное действие
      e.preventDefault();
      _showTab(target);
    });

    return {
      showTab: function (target) {
        _showTab(target);
      },
      switchTabTo: function (index) {
        _switchTabTo(index);
      }
    }

};

$tabs('.tabs');

/* Modals */

let buttons = document.querySelectorAll('.open-modal');
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
  let x = m.querySelector('button.modal-close');
  if (x !== 'modal-wrapper') {
    x.addEventListener('click', hideModals);
  }
});

/* Mask for the telephone */

window.addEventListener("DOMContentLoaded", function() {
  [].forEach.call( document.querySelectorAll('.tel'), function(input) {
  var keyCode;
  function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+375 (___) ___ ____",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function(a) {
              return i < val.length ? val.charAt(i++) || def.charAt(i) : a
          });
      i = new_value.indexOf("_");
      if (i != -1) {
          i < 5 && (i = 3);
          new_value = new_value.slice(0, i)
      }
      var reg = matrix.substr(0, this.value.length).replace(/_+/g,
          function(a) {
              return "\\d{1," + a.length + "}"
          }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
      if (event.type == "blur" && this.value.length < 5)  this.value = ""
  }

  input.addEventListener("input", mask, false);
  input.addEventListener("focus", mask, false);
  input.addEventListener("blur", mask, false);
  input.addEventListener("keydown", mask, false)
});
});

/* Accordion */

var acc = document.getElementsByClassName("accordion-btn");
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

var accs = document.getElementsByClassName("stages-btn");
var accsi;

for (accsi = 0; accsi < accs.length; accsi++) {
  accs[accsi].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

/* Checkbox in price section */

function checkAcknowledgement(form){
  var checkbox = form["changebg"];
  alert(checkbox); //shows [HTMLInputElement]
  if (!checkbox.checked){ //A shorter method for checkbox.checked == false
      alert('Please read through the acknowledgement and acknowledge it.');
      return false;
  } else {
      return true;
  }
}

/* Switch in price section */

const switchBox = document.querySelector(".price");
const priceNav = document.querySelector(".price-nav");

if(switchBox) {
  document.querySelector("input.price-field").addEventListener("change", (e) => {
    const { checked } = e.target;   
    if (checked) {
        switchBox.classList.add("slow");
        priceNav.classList.add("month");
    } else {
        switchBox.classList.remove("slow");
        priceNav.classList.remove("month");
    }
});
}


/* Tabs */
window.addEventListener("load", function() {
  
  var theTabs = document.querySelectorAll("ul.garant-nav > li");

  function theTabClicks(tabClickEvent) {
      var clickedTab = tabClickEvent.currentTarget;
      var tabParent = tabClickEvent.currentTarget.parentNode.parentNode.parentNode;
      var theTabs = tabParent.querySelectorAll("ul.garant-nav > li");
      for (var i = 0; i < theTabs.length; i++) {
          theTabs[i].classList.remove("active");
      }
      
      clickedTab.classList.add("active");
      tabClickEvent.preventDefault();
      var contentPanes = tabParent.querySelectorAll(".garant-item");
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

/* === SLIDERS === */

/* Whywe section slider */
const whyweSlider = new Swiper('.whywe-list', {
  navigation: {
      nextEl: '.whywe-right',
      prevEl: '.whywe-left',
  },
  breakpoints: {
    320: {
      autoHeight: true,
    },
    993: {
      autoHeight: false,
    },
  },
});

/* Price 768px slider */
const priceSlider = new Swiper('.price-responsive', {
  observer: true,
  observeParents: true,
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoHeight: true,
  navigation: {
    nextEl: '.price-arrow-right',
    prevEl: '.price-arrow-left',
},
pagination: {
  el: ".pagin-num7",
  type: "fraction",
},
});
const priceSlider2 = new Swiper('.price-responsive2', {
  observer: true,
  observeParents: true,
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoHeight: true,
  navigation: {
    nextEl: '.price-arrow-right2',
    prevEl: '.price-arrow-left2',
},
pagination: {
  el: ".pagin-num8",
  type: "fraction",
},
});

/* Better 768px slider */
const betterSlider = new Swiper('.better-slider', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoHeight: true,
  navigation: {
    nextEl: '.better-arrow-right',
    prevEl: '.better-arrow-left',
},
pagination: {
  el: ".pagin-num6",
  type: "fraction",
},
});

/* Bonus section slider */
/* Bonus nav */
var bonusNav = new Swiper(".bonus-nav", {
  spaceBetween: 0,
  slidesPerView: 4,
});

/* Bonus slider */
const bonusSlider = new Swiper('.bonus-list', {
  autoHeight: true,
  navigation: {
      nextEl: '.bonus-move-right',
      prevEl: '.bonus-move-left',
  },
  thumbs: {
    swiper: bonusNav,
  },
});

/* Waste section slider */
/* Waste nav */
var wasteNav = new Swiper(".waste-nav", {
  direction: "vertical",
  spaceBetween: 0,
  slidesPerView: 3,
  navigation: {
    nextEl: '.waste-next-btn',
    prevEl: '.waste-prev-btn',
  },
  breakpoints: {
    320: {
      direction: "horizontal",
      slidesPerView: 1,
      spaceBetween: 0,
      pagination: {
        el: ".swip-pagin",
        type: "progressbar",
      },
    },
    769: {
      direction: "vertical",
      spaceBetween: 0,
      slidesPerView: 3,
      pagination: false,
      pagination: {
        el: ".swip-pagin",
        type: "progressbar",
      },
    },
  },
});

/* Waste slider */
const wasteSlider = new Swiper('.swiper-waste', {
  // Navigation arrows
  spaceBetween: 0,
  autoHeight: true,
  navigation: {
    nextEl: '.waste-arrows-right',
    prevEl: '.waste-prev-btn',
  },
  thumbs: {
    swiper: wasteNav,
  },
  breakpoints: {
    320: {
      navigation: {
        nextEl: '.waste-next-btn',
        prevEl: '.waste-prev-btn',
      },
    },
    769: {
      navigation: {
        nextEl: '.waste-next-btn',
        prevEl: '.waste-prev-btn',
      },
    },
    800: {
      navigation: {
        nextEl: '.waste-arrows-right',
        prevEl: '.waste-prev-btn',
      },
    },
    2560: {
      navigation: {
        nextEl: '.waste-arrows-right',
        prevEl: '.waste-prev-btn',
      },
    },
  },
});

/* hide left arrow by deafult */
if(document.querySelector('.waste-more-btn')) {
  var arrow = document.getElementsByClassName('waste-more-btn')[0];
  var prevArrow = document.getElementsByClassName('waste-prev-btn')[0];
  var nextArrow = document.getElementsByClassName('waste-next-btn')[0];
  arrow.classList.add('disabled');



/* Swiper API - if index = 1 hide left arrow / otherwise show */
wasteSlider.on('slideChange', function() {
  var realIndex = wasteSlider.realIndex;

  if (realIndex == 0) {
    prevArrow.classList.add('hide');
    
  }
  else {
    prevArrow.classList.remove('hide');
  }

  if (realIndex !== 2) {
    arrow.classList.add('hide');
    arrow.classList.add('disabled');
  } else {
    arrow.classList.remove('hide');
    arrow.classList.remove('disabled');
  }

  if ((window.innerWidth < 769)) {

    if (realIndex !== 2) {
      arrow.classList.add('hide');
      arrow.classList.remove('disabled');
      nextArrow.classList.remove('hide');
    } else {
      arrow.classList.remove('hide');
      nextArrow.classList.add('hide');
    }
  }
});

/* Проверка если хотя бы одно из полей в форме изменилось */
const selectElement = document.querySelectorAll('.waste-field');
var i;
for(i=0;i<selectElement.length;i++){
  selectElement[i].addEventListener('change',myChange)
}
function myChange(){
  nextArrow.classList.remove('disabled');
}
}

/* Watcher slider */
const watcherSlider = new Swiper('.watcher-list', {
  spaceBetween: 0,
  slidesPerView: 1,
  loop: true,
  observer: true,
  observeParents: true,
  autoHeight: true,
  pagination: {
    el: ".pagin-num2",
    type: "fraction",
  },
  navigation: {
      nextEl: '.watcher-ai-right',
      prevEl: '.watcher-ai-left',
  },
});

/* Clients slider */
const clientsSlider = new Swiper('.clients-list', {
  loop: true,
  observer: true,
  observeParents: true,
  navigation: {
      nextEl: '.clients-arrow-right',
      prevEl: '.clients-arrow-left',
  },
  autoHeight: true,
  pagination: {
    el: ".pagin-num1",
    type: "fraction",
  },
});

/* Listen slider */
const listenSlider = new Swiper('.listen-list', {
  loop: true,
  observer: true,
  observeParents: true,
  navigation: {
      nextEl: '.listen-arrow-right',
      prevEl: '.listen-arrow-left',
  },
  autoHeight: true,
  pagination: {
    el: ".pagin-num3",
    type: "fraction",
  },
});

/* Team slider */
const teamSlider = new Swiper('.team-slider', {
  slidesPerView: 3,
  loop: true,
  observer: true,
  observeParents: true,
  navigation: {
      nextEl: '.team-arrow-right',
      prevEl: '.team-arrow-left',
  },
  pagination: {
    el: ".pagin-num4",
    type: "fraction",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    769: {
      slidesPerView: 3,
    },
  },
});

/* Team more slider */
const teamMoreSlider = new Swiper('.team-fullmore', {
  slidesPerView: 3,
  loop: true,
  observer: true,
  observeParents: true,
  centeredSlides: true,
  navigation: {
      nextEl: '.team-fullmore-right',
      prevEl: '.team-fullmore-left',
  },
  pagination: {
    el: ".pagin-num5",
    type: "fraction",
  },
});

/* Stack slider */
const stackSlider = new Swiper('.stack-slider', {
  slidesPerView: 1,
  loop: true,
  observer: true,
  observeParents: true,
  centeredSlides: true,
  navigation: {
      nextEl: '.stack-arrow-right',
      prevEl: '.stack-arrow-left',
  },
  pagination: {
    el: ".pagin-num10",
    type: "fraction",
  },
});

/* Memories slider */
const memoriesSlider = new Swiper('.memories-slider', {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: ".memories-pagination",
    clickable: true,
  },
});

/* Single slider */
const singleSlider = new Swiper('.single-slider', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.single-nav-right',
    prevEl: '.single-nav-left',
},
pagination: {
  el: ".single-pagination",
  type: "fraction",
},
});

/* Certs slider */
var certsSlider = new Swiper(".certs-slider", {
  slidesPerView: 2,
  spaceBetween: 15,
  autoHeight: true,
  pagination: {
    el: ".certs-pagination",
    clickable: true,
  },
});

/* Invid slider */
const invidSlider = new Swiper('.invid-slider', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.invid-nav-right',
    prevEl: '.invid-nav-left',
  },
  pagination: {
    el: ".invid-pagination",
    type: "fraction",
  },
  breakpoints: {
    320: {
      loop: true,
    },
    521: {
      loop: false,
    },
  },
});

/* Glad slider */
const gladSlider = new Swiper('.glad-slider', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.glad-nav-right',
    prevEl: '.glad-nav-left',
  },
  pagination: {
    el: ".glad-pagination",
    type: "fraction",
  },
  breakpoints: {
    320: {
      loop: true,
    },
    521: {
      loop: false,
    },
  },
});

/* Criteria filter case btn */
if(document.querySelector(".criteria-drop-btn-one")) {
  const criteriaBtn = document.querySelector(".criteria-drop-btn-one");
  criteriaBtn.addEventListener("click", function() {
    document.querySelector(".criteria-drop-one").classList.toggle("show");
  });
}


/* Criteria filter region btn */
if(document.querySelector(".criteria-drop-btn-thue")) {
  const criteriaBtn2 = document.querySelector(".criteria-drop-btn-thue");
  criteriaBtn2.addEventListener("click", function() {
    document.querySelector(".criteria-drop-thue").classList.toggle("show");
  });
}

/* 
  Проверка на наличие .services-sublist 
  у .service-descr. Если списка нет, 
  то height: блока .services-image 
  составляет 470px
 */

/* Проверка если хотя бы одно из полей в форме изменилось */
const serviceDescr = document.querySelectorAll('.services-descr .services-sublist');
const serviceSublist = document.querySelectorAll('.services-sublist');
var iss;

for(iss=0;iss<serviceSublist.length;iss++){
  if(serviceSublist[iss].hasChildNodes('services-subitem')) {
    console.log("я есть");
  } else {
    console.log("меня нет");
  }
}








