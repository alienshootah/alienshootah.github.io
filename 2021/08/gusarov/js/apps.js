/* Menu btn */
const menuBtn = document.querySelector(".header-mobile-btn");
menuBtn.addEventListener("click", function() {
  document.querySelector(".detail").classList.toggle("show");
});

/* Close menu btn */
const closeMenuBtn = document.querySelector(".detail-close-btn");
closeMenuBtn.addEventListener("click", function() {
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