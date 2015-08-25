define(function(require) { 
  var $ = require("jquery");
  var Q = require("q");
  var drawDeck = require("draw-deck");
  var deck1;
  var deck2;

    return {

      newGame: function() {
        //Original call site of the promise
        drawDeck.drawDeck()
        // Then gets executed when promise is resolved
        .then(function(data) {
          deck1 = data;
          console.log("deck1", deck1);
        })
        // Fail gets executed when promise is rejected
        .fail(function(error) {
          console.log("API call failed with error", error);
        });

        //Original call site of the promise
        drawDeck.drawDeck()
        // Then gets executed when promise is resolved
        .then(function(data) {
          deck2 = data;
          console.log("deck2", deck2);
        })
        // Fail gets executed when promise is rejected
        .fail(function(error) {
          console.log("API call failed with error", error);
        });

        return deck1;
        
      }//end newGame function

    };//end return

});//end of module