define(function(require) { 
  var $ = require("jquery");
  var newGame = require("new-game");

  $('#start').click(function() {
    newGame.newGame();
  });

});//end module