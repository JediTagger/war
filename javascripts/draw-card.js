define(function(require) { 
  var $ = require("jquery");
  var Q = require("q");
  var newGame = require("new-game");


  return {

    drawCard: function() {
      var deferred = Q.defer();

      $.ajax({
        url: "http://deckofcardsapi.com/api/deck/deck1/draw/?count=1",
        method: "GET"
      })
      .done(function(data) {
        deferred.resolve(data);
        console.log("did this work?", deck1);
      })
      .fail(function(xhr, status, error) {
        deferred.reject(error);
      });
      return deferred.promise;
    }
  };
});