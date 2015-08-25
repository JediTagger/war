define(function(require) { 
  var $ = require("jquery");
  var Q = require("q");
  var drawCard = require("draw-card");
  var card1;
  var card2;

    return {

      newBattle: function() {
      
        console.log("new battle clicked");

      // newGame: function() {
      //   //Original call site of the promise
      //   drawDeck.drawDeck()
      //   // Then gets executed when promise is resolved
      //   .then(function(data) {
      //     deck1 = data;
      //     console.log("deck1", deck1);
      //   })
      //   // Fail gets executed when promise is rejected
      //   .fail(function(error) {
      //     console.log("API call failed with error", error);
      //   });

      //   //Original call site of the promise
      //   drawDeck.drawDeck()
      //   // Then gets executed when promise is resolved
      //   .then(function(data) {
      //     deck2 = data;
      //     console.log("deck2", deck2);
      //   })
      //   // Fail gets executed when promise is rejected
      //   .fail(function(error) {
      //     console.log("API call failed with error", error);
      //   });
      // }//end newGame function

      }//end newBattle function

    };//end return

});//end of module