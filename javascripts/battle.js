define(function(require) { 
  var $ = require("jquery");
  var newBattle = require("new-battle");
  var drawCard = require("draw-card");

  $('#battle').click(function() {
    drawCard.drawCard();
  });

});//end module