console.log("BOOOOOOO!!!!!")




//Set Board
var board = $('section');
var currentPlayer = "G";

board.on('click', '.column', function(){
  var index = event.target.parentNode;

  var columnIndex = newBoard.board[index];

  if (columnIndex.length <= 6) {
    columnIndex.push(currentPlayer);
    var cellIndex = (columnIndex.length - 1);
    var newId = cellIndex;
    console.log(newId)
  };
});
//newBoard.

var myBoard = function() {
  this.currentPlayer = 'S';
  this.board = [];
  this.player = null;
  this.makeBoard = function() {
    for (var i = 0; i < 7; i++) {
      //making dom column
      var setColumn = $('.column');
      console.log(setColumn);
      //making dom row
      var setChip = $('.chip');
      var chip = [];
      for (var i = 0; i < 6; i++) {
        //put chip in column dom
        chip.push(new Cell());
        var cell = $('.column');
        setColumn.append(setChip)
      }
    }
  }
}
//make column in to arrays
var columnArray = [''];
//should be .column number as index and chip number as the the value i.e. col1: a1
$.each(columnArray, function(index, value){
  $('.colum', {
  //'text'colnumbs? : value  
  })
});

//make section array
var secArray = [''];
// should section: column1 so on
$.each(secArray, function(index, value){
  $('section')
})
