let imObj = null;
function init() {
    imObj = document.getElementById('ball');
    imObj.style.position = 'relative';
    imObj.style.left = '0px';
}
function moveRight() {
    imObj.style.left = parseInt(imObj.style.left) + 10 + 'px';
}
window.onload = init;