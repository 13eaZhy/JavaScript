// bird component
class BirdOne{
  constructor(){
    //object with bird INFO
    this.left = Math.floor( Math.random()* 400);
    this.top  = Math.floor( Math.random()* 400);
    this.direction = "right";
    this.speed = 0.3;
    this.points = 0;
  }
  renderhp(){
    let html = `<div id="hpBirds1"><span style="margin-top: 0px;"><span id="icon1"></span>${this.points}</span></div>`;
    let div = document.getElementById('hp1');
    div.innerHTML = html;
  }
  render(){
    let html = `<div id="b-1" onclick="b1.die()" style="top:${this.top}px; left: ${this.left}px" class="bird b-1 ${this.c1}"></div>`;
    let div = document.getElementById('map1');
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
      } else if (b1.top < 26) {
        b1.direction = "left";
        b1.top -=Math.floor( Math.random()*1) - 30;
        b1.render();
      } else if (b1.top > 460) {
        b1.direction = "right";
        b1.top -=Math.floor( Math.random()*60) + 30;
      }

      if (b1.direction == "right"){
         b1.left+=b1.speed;
      } else if (b1.direction == "left"){
         b1.left-=b1.speed;
      }

            let d1 = b1.direction == "left" ? "l" : "r";

      // b1.render();
      let div = document.getElementById('b-1');
          div.style.left = b1.left+`px`;
          if (d1=="l"){
            div.style.transform="scaleX(-1)";
          } else if (d1=="r"){
            div.style.transform="scaleX(1)";
          }
    }, 5);
  }
  die(){
    this.points += 1;
    this.renderhp();
    this.c1 = "animated fadeOut";
    this.render();
    setTimeout( function(){
      b1.c1 ="";
      b1.top = Math.floor( Math.random()* 400);
      b1.left = Math.floor( Math.random()* 400);

    },1000);
  }
}

//////////////////////////////////////
let b1 = new BirdOne();
b1.render();
b1.fly();
b1.renderhp();
//////////////////////////////////////
class BirdTwo{
  constructor(){
    //object with bird INFO
    this.left = Math.floor( Math.random()* 400);
    this.top  = Math.floor( Math.random()* 400);
    this.direction = "right";
    this.speed = 1;
    this.points = 0;
  }
  renderhp(){
    let html = `<div id="hpBirds2"><span style="margin-top: 0px;"><span id="icon2"></span>${this.points}</span></div>`;
    let div = document.getElementById('hp2');
    div.innerHTML = html;
  }
  render(){
    let html = `<div id="b-2" onclick="b2.die()" style="top:${this.top}px; left: ${this.left}px" class="bird b-2 ${this.c2}"></div>`;
    let div = document.getElementById('map2');
        div.innerHTML = html;
  }
  fly(){
    setInterval ( function(){
      if(b2.left > 465){
        b2.direction = "left";
        b2.top +=Math.floor( Math.random()*60) - 30;
        b2.render();
      } else if (b2.left < 25) {
        b2.direction = "right";
        b2.top +=Math.floor( Math.random()*60) - 30;
        b2.render();
        b2.speed = Math.floor( Math.random()*2) + 1;
      } else if (b2.top < 26) {
        b2.direction = "left";
        b2.top -=Math.floor( Math.random()*1) - 30;
        b2.render();
      } else if (b2.top > 460) {
        b2.direction = "right";
        b2.top -=Math.floor( Math.random()*60) + 30;
      }

      if (b2.direction == "right"){
         b2.left+=b2.speed;
      } else if (b2.direction == "left"){
         b2.left-=b2.speed;
      }

            let d2 = b2.direction == "left" ? "l" : "r";

      // b2.render();
      let div = document.getElementById('b-2');
          div.style.left = b2.left+`px`;
          if (d2=="l"){
            div.style.transform="scaleX(-1)";
          } else if (d2=="r"){
            div.style.transform="scaleX(1)";
          }
    }, 5);
  }
  die(){
    this.points += 5;
    this.renderhp();
    this.c2 = "animated fadeOut";
    this.render();
    setTimeout( function(){
      b2.c2 ="";
      b2.top = Math.floor( Math.random()* 400);
      b2.left = Math.floor( Math.random()* 400);

    },1000);
  }
}
let b2 = new BirdTwo();
b2.render();
b2.fly();
b2.renderhp();

/////////////////////////////////////////////////////

class BirdThree{
  constructor(){
    //object with bird INFO
    this.left = Math.floor( Math.random()* 400);
    this.top  = Math.floor( Math.random()* 400);
    this.direction = "right";
    this.speed = 3;
    this.points = 0;
  }
  renderhp(){
    let html = `<div id="hpBirds3"><span style="margin-top: 0px;"><span id="icon3"></span>${this.points}</span></div>`;
    let div = document.getElementById('hp3');
    div.innerHTML = html;
  }
  render(){
    let html = `<div id="b-3" onclick="b3.die()" style="top:${this.top}px; left: ${this.left}px" class="bird b-3 ${this.c3}"></div>`;
    let div = document.getElementById('map3');
        div.innerHTML = html;
  }
  fly(){
    setInterval ( function(){
      if(b3.left > 465){
        b3.direction = "left";
        b3.top +=Math.floor( Math.random()*60) - 30;
        b3.render();
      } else if (b3.left < 25) {
        b3.direction = "right";
        b3.top +=Math.floor( Math.random()*60) - 30;
        b3.render();
        b3.speed = Math.floor( Math.random()*2) + 1;
      } else if (b3.top < 26) {
        b3.direction = "left";
        b3.top -=Math.floor( Math.random()*1) - 30;
        b3.render();
      } else if (b3.top > 460) {
        b3.direction = "right";
        b3.top -=Math.floor( Math.random()*60) + 30;
      }

      if (b3.direction == "right"){
         b3.left+=b3.speed;
      } else if (b3.direction == "left"){
         b3.left-=b3.speed;
      }

            let d3 = b3.direction == "left" ? "l" : "r";

      // b3.render();
      let div = document.getElementById('b-3');
          div.style.left = b3.left+`px`;
          if (d3=="l"){
            div.style.transform="scaleX(-1)";
          } else if (d3=="r"){
            div.style.transform="scaleX(1)";
          }
    }, 5);
  }
  die(){
    this.points += 3;
    this.renderhp();
    this.c3 = "animated fadeOut";
    this.render();
    setTimeout( function(){
      b3.c3 ="";
      b3.top = Math.floor( Math.random()* 400);
      b3.left = Math.floor( Math.random()* 400);

    },1000);
  }
}
let b3 = new BirdThree();
b3.render();
b3.fly();
b3.renderhp();
