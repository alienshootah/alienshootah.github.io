/* Mobile btn's */
const mobileBtn = document.querySelector(".header-mobile");
mobileBtn.addEventListener("click", function() {
  document.querySelector(".header").classList.toggle("show");
});

/* Current year in footer */
year = document.querySelector('.footer-date');
year.innerHTML = new Date().getFullYear();

/* Tabs */
  window.addEventListener("load", function() {
    // store tabs variable
    var theTabs = document.querySelectorAll("ul.menutab-list > li");

    function theTabClicks(tabClickEvent) {
        var clickedTab = tabClickEvent.currentTarget;
        var tabParent = tabClickEvent.currentTarget.parentNode.parentNode.parentNode;
        var theTabs = tabParent.querySelectorAll("ul.menutab-list > li");
        for (var i = 0; i < theTabs.length; i++) {
            theTabs[i].classList.remove("active");
        }
        
        clickedTab.classList.add("active");
        tabClickEvent.preventDefault();
        var contentPanes = tabParent.querySelectorAll(".tabs-content");
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