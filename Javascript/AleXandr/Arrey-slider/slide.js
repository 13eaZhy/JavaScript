// array with  image adress
var slides = [
              "1.jpeg",
              "2.jpeg",
              "3.jpeg",
            ];

//function for first slides
function show() {
    document.querySelector('#slider img').src = slides[0];
}

//Slider button
function left() {
    slides.push(slides.shift());
    show();
}
function right() {
    slides.unshift(slides.pop());
    show();
}

//timer
setInterval ( left, 3000)
