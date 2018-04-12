/*
 * Create a list that holds all of your cards
 */
let card = document.getElementsByClassName('card');
let array = Array.from(card);

let deck = document.querySelector('.deck');

function clearDeck(){
  deck.innerHTML = ""
}

function showStuff() {
  for (let i = 0; i < array.length; i++){
    let temp = array[i];
    deck.appendChild(temp);
  }
};

let eachCard = document.querySelectorAll('.card');

eachCard.forEach(function coverCards (item){
  item.classList.toggle('match',false);
  item.classList.toggle('open',false);
  item.classList.toggle('show',false);
})

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;


}


clearDeck();

shuffle(array);

showStuff();

let icon = document.querySelectorAll('.icon');
let iconArray = Array.from(icon);

const testArray = [];

icon.forEach(function (i){
 let klases = i.classList;
 let korteles = i.parentNode.id;
 i.parentNode.addEventListener("click", function (){
   i.parentNode.classList.toggle('open');
   i.parentNode.classList.toggle('show');
 });
 testArray.push( {klase: klases[1], kortele: korteles, guessed: false} )
})


// icon.forEach(function (i){
//  let test = i.attributes;
//  console.log(test["0"].nodeValue)
// })

// for (a = 0; a < array.length; a++){
//   if (icon.classList.contains('show')){
//     icon[a].
// }
// }
/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
