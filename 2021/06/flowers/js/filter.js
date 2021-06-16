/* Catalog filter */

const filterBtn = document.querySelector(".cata-filter-btn");
filterBtn.addEventListener("click", function() {
  document.querySelector(".cata-body").classList.toggle("full");
});