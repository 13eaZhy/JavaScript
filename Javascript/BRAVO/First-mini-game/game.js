function makeChair( n ){

        return `<td onclick="booking( ${n} );">
      <img src="images/1.png">
      <h3>${n}</h3>
              </td>`;

    } // makes 1 td row

  function makeRow( count ){
    var row = "";

    for ( var i=1; i <= count ; i++){
      row+= makeChair ( i );
    }
    // alert(row);
    return row;

  } // lipeste makeChair cu makeRow

function booking( n ){
    confirm(`You want to book seat number ${n} ?`);
}


  document.getElementById( "row" ).innerHTML = makeRow(10);
