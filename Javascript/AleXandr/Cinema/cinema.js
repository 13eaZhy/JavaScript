//map 0-free; 1 - reserved
var seats = [0,0,0,1,0,0,1,0,0,0]

function show() {
  document.body.innerHTML = '';
  for (var i=0;i<10;i++) {
    if (seats[i] == 1) {
      document.body.innerHTML += '<div><img src="person.png"></div>'
    } else {
      document.body.innerHTML += '<div><h2>'+ (i+1) +'</h2></div>'
    }
  }
}

function ask() {
  var s = prompt('Which seat?');
  seats[s-1] = 1;
  show();
}

запретить добавление в занятые места и предупредить
условие не выходить за рамки массива
каждый раз когда обновляется карта(когда show) вывести сколько осталось мест
сделать двумерный зал
