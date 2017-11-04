    // letter choises
    var computerChoices = ["a", "b", "c", "d", "e", "f","g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var wins = 0;
    var losses = 0;
    var guessesleft = 10;
    var guessessofar = [];

    document.onkeyup = function(event) {
      
      var userGuess = event.key;
      // Random chooses
      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
      if (userGuess === computerGuess) {
        wins++;
        guessessofar.push(userGuess);
        alert('You Win!');
        return [];
      }
      else if (userGuess != computerGuess) {
        guessesleft--;
        guessessofar.push(userGuess);
      }
      if ((guessesleft === 0) && (wins === 0)){
        losses++;
        alert('Game Over!');
        return;
      }
      
      
      
        var html =
          "<p>You chose: " + userGuess + "</p>" +
          "<p>The computer chose: " + computerGuess + "</p>" +
          "<p>wins: " + wins + "</p>" +
          "<p>losses: " + losses + "</p>" +
          "<p>guessesleft: " + guessesleft + "</p>" +
          "<p>guessessofar: " + guessessofar + "</p>" ;
        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#game").innerHTML = html;
      };
    