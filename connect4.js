console.log("BOOOOOOO!!!!!")

//$('section').bind('click', function() {
  //  alert($(this).attr('.column'));
//});

$(".column").click(function(){
      console.log(event.target.parentNode)
});
