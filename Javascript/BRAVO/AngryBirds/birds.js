// bird component
class Bird{
  constructor(){
    //object with bird INFO
    this.left = 100;
    this.top  = 100;
    this.direction = "right";
    this.speed = 1;
  }
  render(){
    let html = `<div id="b-1" onclick="b1.die()" style="top:${this.top}px; left: ${this.left}px" class="bird b-1 ${this.c}"></div>`;
    let div = document.getElementById('map');
        div.innerHTML = html;
  }
  fly(){
    setInterval ( function(){
      if(b1.left > 465){
        b1.direction = "left";
        b1.top +=Math.floor( Math.random()*60) - 30;
        b1.render();
      } else if (b1.left < 25) {
        b1.direction = "right";
        b1.top +=Math.floor( Math.random()*60) - 30;
        b1.render();
        b1.speed = Math.floor( Math.random()*2) + 1;
      }

      if (b1.direction == "right"){
         b1.left+=b1.speed;
      } else if (b1.direction == "left"){
         b1.left-=b1.speed;
      }

            let d = b1.direction == "left" ? "l" : "r";

      // b1.render();
      let div = document.getElementById('b-1');
          div.style.left = b1.left+`px`;
          if (d=="l"){
            div.style.transform="scaleX(-1)";
          } else if (d=="r"){
            div.style.transform="scaleX(1)";
          }
    }, 5);
  }
  die(){
    this.c = "animated fadeOut";
    this.render();
    setTimeout( function(){
      b1.c ="";
      b1.top = Math.floor( Math.random()* 400);
      b1.left = Math.floor( Math.random()* 400);
      b1.render();
    },1000);
  }
}

//////////////////////////////////////
let b1 = new Bird();
b1.render();
b1.fly();
