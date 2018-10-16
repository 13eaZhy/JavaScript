var n = 0;
function start() {
  setInterval( addSquare, 100)
}

function addSquare() {
  n++;
  if (n<10) {
  document.querySelector('#preloader').innerHTML += '<div class="sq"></div>';
} else {
  n = 0;
  document.querySelector('#preloader').innerHTML = '';
}
}
