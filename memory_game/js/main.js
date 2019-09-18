console.log("Up and running!");
//create array cards
var cards = ["queen","queen","king","king"];
var cardsInPlay = []
function checkForMatch(){
   if (cardsInPlay.length === 2) {
     if (cardsInPlay[0] === cardsInPlay[1]){
       alert("You found a match!");
      }
      else if (cardsInPlay.length === 2 && cardsInPlay[0] !== cardsInPlay[2]) {
        alert("Sorry, try again.");
       }
    }
}


function flipCard(cardId) {
  console.log("user flipped" + " " + cards[cardId]);
  cardsInPlay.push(cards[cardId]);

  checkForMatch();
}

flipCard(0);
flipCard(2);
