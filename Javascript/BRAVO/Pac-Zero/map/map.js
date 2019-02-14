// class of map component

//Legend : 0 = Empty ; 1 = Pacman ; 2 = Cherry;
//         3 = Bomb ; 4 = Coins;
class GameMap{
  // initializare
  constructor(){
    this.grid = [ 1,2,3,4,0,1,2,3,4,0 ];
    //            0,1,2,3,4,5,6,7,8,9
  }
  render(){
    var div = document.getElementById('map');

    var html =``;

    for (var i=0; i<10; i++){
      if (this.grid[i]==0){
        html += `<div>Empty</div>`;
      } else if (this.grid[i]==1) {
        html += `<div>Pacman</div>`;
      } else if (this.grid[i]==2) {
        html += `<div> Cherry </div>`;
      } else if (this.grid[i]==3) {
        html += `<div>Bomb</div>`;
      } else if (this.grid[i]==4) {
        html += `<div>Coins</div>`;
      }

    }
    div.innerHTML = html;
  }
}
