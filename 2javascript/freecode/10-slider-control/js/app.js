const sliderContainer = document.querySelector('.slider-container');

const progressBar = document.querySelector('.slider-container .progress');
const thumb = document.querySelector('.slider-container .thump');
const thumbIndicator = document.querySelector('.slider-container .thump-indicator');
const sliderContainerWidth = sliderContainer.offsetWidth;
const sliderContainerLeft = sliderContainer.offsetLeft;

var percentage = 50;
var dragging = false;
var translate;

function setPercentage() {
    progressBar.style.transform = 'scaleX(' + percentage/100 + ')';
    thumb.style.transform = 'translate(-50%) translateX(' + (percentage/100 * sliderContainerWidth) + 'px)';
}
setPercentage();

thumb.addEventListener('mousedown', function(e) {
    dragging = true;
    thumbIndicator.classList.add('focus');
});
document.addEventListener('mousemove', function(e) {
    if (dragging) {
        if (e.clientX < sliderContainerLeft) {
            percentage = 0;
        } else if (e.clientX > sliderContainerWidth + sliderContainerLeft) {
            percentage = 100;
        } else {
            translate = e.clientX - sliderContainerLeft;
            percentage = (translate / sliderContainerWidth) * 100;
        }
        setPercentage();
    }
})
thumb.addEventListener('mouseup', function(e) {
    dragging = false;
    thumbIndicator.classList.remove('focus');
});