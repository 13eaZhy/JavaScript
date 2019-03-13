//Template for a message
class Message{
  constructor(text,author){
    this.text=text;
    this.author=author;
    this.date=new Date(); // current date / time
  }
}

/////////////Chat Logic/////////////////
var messages = []; //list of messages
function addMessage(){
  var input = document.querySelector("#chat .input input");
  var m = new Message( input.value ,"user");
    messages.push(m); // add to end of massive
  console.log(messages);
    //save --- messages[] -> 'messages'
    localStorage.setItem('messages', JSON.stringify( messages ) );
    input.value='';
    // 1) Show last 8 messages
  showMessages();
}

// function loads from localStore messages
function loadMessages(){
  messages = JSON.parse( localStorage.getItem('messages') );
  if (messages === null){
    messages = [];
  }
  showMessages();
}

  function showMessages(){
    var div = document.querySelector('#chat .messages');
        div.innerHTML = '';
        for (var i in messages){
          var html = `<div class="message">
            <p>
            ${messages[i].text}<hr>
            <small>${messages[i].author} / ${messages[i].date}</small>
            </p>
          </div>`;
          div.innerHTML += html;
        }
  }
///////////////////////////////////////
