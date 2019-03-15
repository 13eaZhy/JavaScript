//loads the page with AJAX
// --> #content

function load(number){
    var xhr = new XMLHttpRequest(); //obiect care face conexiunea cu serverul

    //2) What do we want from server?

    xhr.open("GET",`pages/page-${number}.html`);

    //x) data loaded ---> function(){}
    xhr.onload = function(){
        //4) GET the response 
        // alert(xhr.responseText);
        var div = document.querySelector("#content");
        div.innerHTML = xhr.responseText;
    }

    //3) Tell server to do it

    xhr.send()

   
}