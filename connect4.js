console.log("BOOOOOOO!!!!!")
//start to int game

var $chip = $('.chip')
var $column = $('.column');


function connectMatrix($chip, $coloumn, boardValue) {
  var fourArray = [];

  for(var i = 0; i < $chip; i++){
    fourArray.push([]);
console.log(fourArray)
    fourArray[i].push( new Array($column));

     for(var j = 0; j < $column; j++){
       fourArray[i][j] = boardValue;
       console.log(value)
     }
  }
}
console.log(connectMatrix)


//newBoard.

var myBoard = function() {
  this.currentPlayer = 'G';
  this.board = [];
  this.player = null;
  this.makeBoard = function() {
    for (var i = 0; i <= 7; i++) {
      //making dom column
      //var setColumn = $('.column');
      //console.log(setColumn);
      //making dom row
      //var setChip = $('.chip');
      var chip = [];
      console.log(chip)
      //for (var i = 0; i < 6; i++) {
        //put chip in column dom
        //var cell = $('.column');
        this.board.push(chip)
      //}
    }
  }
};
var newBoard = new myBoard();
newBoard.makeBoard();


//make play
var board = $('section');
var currentPlayer = "G";
  board.on('click', '.column', function(){
    //which column you click on
     var index = event.target.parentNode.id;
        console.log(index)

      var newIndex = index -1;
     var columnIndex = newBoard.board[newIndex];
     //How many items have been pushed into the column array
         console.log(columnIndex)

       if ( columnIndex.length <= 6) {
      columnIndex.push(currentPlayer);
      var chipIndex = (columnIndex.length);
      //which chip div is have an a currentPlayer value being pushed into
          console.log(chipIndex)
          $('.column').each(function(){
          chipIndex.push($(this).attr('#chip'));
      });
    }

var chipHunt = function() {
var columntest =  document.getElementsByClassName('column');
console.log(columntest)
    for(i = j = 0; i < columntest.length; i++){
      if(columntest[i].childNodes[i].nodeName){

      }
   }
};


 var bestChipIndex = boardValue + chipIndex
  document.getElementById('bestChipIndex').style.background= 'red'


});

    //this.last-child.style.backgroundColor ='red';
    //if (currentPlayer ==""){
      //currentPlayer = ""
//}

//   };
// });
//Make play
/*
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
});

//Check for win

//check columns
//array of chips in columns
columnOne = ['#a1','#a2','#a3','#a4','#a5','#a6']
columnTwo = ['#b1','#b2','#b3','#b4','#b5','#b6']
columnThree = ['#c1','#c2','#c3','#c4','#c5','#c6']
columnFour= ['#d1','#d2','#d3','#d4','#d5','#d6']
columnFive = ['#e1','#e2','#e3','#e4','#e5','#e6']
columnSix = ['#f1','#f2','#f3','#f4','#f5','#f6']
columnSeven = ['#g1','#g2','#g3','#g4','#g5','#g6']
//array of columns
columnArray =[columnOne, columnTwo, columnThree, columnFour, columnFive, columnSix, columnSeven]


/*function checkColumn() {
  for (var i = 0; i <columnArray.length; i++)

};

//check rows
rowOne = ['#a6','#b6','#c6','#d6','#e6','#f6','#g6']
rowTwo = ['#a5','#b5','#c5','#d5','#e5','#f5','#g5']
rowThree = ['#a4','#b4','#c4','#d4','#e4','#f4','#g4']
rowFour = ['#a3','#b3','#c3','#d3','#e3','#f3','#g3']
rowFive = ['#a2','#b2','#c2','#d2','#e2','#f2','#g2']
rowSix = ['#a1','#b1','#c1','#d1','#e1','#f1','#g1']
// array of rows
rowsArray = [rowOne, rowTwo, rowThree, rowFour, rowFive, rowSix]
//check diagonals
diagOne = ['#a3','#b4','#c5','#d6']
diagTwo = ['#a2','#b3','#c4','#d5','#e6']
diagThree = ['#a1','#b2','#c3','#d4','#e5','#f6']
diagFour = ['#b1','#c2','#d3','#e4','#f5','#g6']
diagFive = ['#c1','#d2','#e3','#f4','#g5']
diagSix = ['#d1','#e2','#f3','#g4']
//array of diagonal arrays
diagArray = [diagOne, diagTwo, diagThree, diagFour, diagFive, diagSix]
//render play

// change color of chip piece

//next player turn
*/
