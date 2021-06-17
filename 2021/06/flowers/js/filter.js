/* Catalog filter */

const filterBtn = document.querySelector(".cata-filter-btn");
filterBtn.addEventListener("click", function() {
  document.querySelector(".cata-body").classList.toggle("full");
});

/* Filter close */

const closeBtn = document.querySelector(".filters-mobile-btn");
closeBtn.addEventListener("click", function() {
  document.querySelector(".cata-body").classList.remove("full");
});