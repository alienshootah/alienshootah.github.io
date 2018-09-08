window.onload= function() {
    document.getElementById('toggler').onclick = function() {
        openbox('box', this);
        return false;
    };
};
function openbox(id, toggler) {
    var span = document.getElementById(id);
    if(span.style.display == 'inline-block') {
        span.style.display = 'none';
        toggler.innerHTML = 'Открыть';
    }
    else {
        span.style.display = 'block';
        toggler.innerHTML = '';
    }
}
