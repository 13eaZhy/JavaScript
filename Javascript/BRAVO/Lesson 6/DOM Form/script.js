// Database

var users =[
  {
    avatar: "http://icons.iconarchive.com/icons/aha-soft/free-large-boss/48/Admin-icon.png",
    username: "adm!n"
  },
  {
    avatar: "http://icons.iconarchive.com/icons/custom-icon-design/flatastic-11/48/Customer-service-icon.png",
    username: "moderator"
  },
  {
    avatar: "http://icons.iconarchive.com/icons/aha-soft/standard-portfolio/48/Graphic-designer-icon.png",
    username: "designer"
  }
];


// user --show--> html

//showing as html one user
function showUser( index ){
  var results_wrapper = document.querySelector('#results');
  console.log(results_wrapper);
// creates new din in memory
    var div = document.createElement('div');

// set the class
  div.className="user";
// create img tag
  var img = document.createElement('img');
// set src attribute
  img.setAttribute('src', users[index].avatar);
// create link
  var a = document.createElement('a');
  var href = document.createAttribute('href');
  a.setAttribute ('href', "#");
// set text inside
  a.innerText=users[index].username;
// append children
  div.appendChild( img );
  div.appendChild ( a );
// append final children
  results_wrapper.appendChild (div);


}

function showUserList( word ){
  // clear

  // STRING
  // Vasea , vasea, Vasea
  // vas -> vasea, vasilisa, etc
  for ( var i=0; i<users.length; i++){
    if( users[i].username == word){
        showUser(i);
    }

  }
}



function search(){
  var input = document.getElementById('search').firstElementChild;
  console.dir(input);
  var word = input.value;
  showUserList(word);
}


showUserList();
