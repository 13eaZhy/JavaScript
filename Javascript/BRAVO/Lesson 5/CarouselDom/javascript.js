//Array of objects
var slides=[
  { /* index-0 */
    title:"Free vacation on the London Bridge",
    src  :"images/bridge.jpeg"
  },
  { /* index-1 */
    title:"Beautiful vacation at the sea",
    src  :"images/sea.jpeg"
  },
  { /* index-2 */
    title:"Fresh air and beautiful places",
    src  :"images/road.jpeg"
  }
]; // Array


//logic
function showSlide(effect,n){
  let div_slide = document.querySelector('#carousel .slide');
  console.log(div_slide);
  for (var row=0; row<6 ; row++){
    for (var col=0; col<8 ; col++){
      let x = -100*col;
      let y = -100*row;
      //let effect = 'bounceIn';
      let d = Math.random()/2;
      let b = slides[n].src;
      let html = `<div style="background-image:url(${b}) ;background-position: ${x}px ${y}px; animation-delay: ${d}s" class="box ${effect} animated"></div>`;
      div_slide.innerHTML += html;
    }

  }
}
showSlide('bounceIn',0);
