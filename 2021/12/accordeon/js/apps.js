/* Dropdowns */

const accordion = document.getElementsByClassName('cord-item');

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}