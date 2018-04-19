/*
 * Create a list that holds all of your cards
 */
let timer = 0;
let card = document.getElementsByClassName('card');
let array = Array.from(card);
let moves
moves = 0;
document.getElementsByClassName('moves')[0].textContent = `${moves}`;
let deck = document.querySelector('.deck');
let stars = document.getElementById('stars');
let firstStar = stars.childNodes[1];


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
let click
let previousClick

let isIncorrect

icon.forEach(function (i){
 let cardElement = i.parentNode
cardElement.addEventListener("click", addClicks);


function addClicks(){
  //if prevents 3rd card to be clicked
   if(!isIncorrect){

   cardElement.classList.add('open');
   cardElement.classList.add('show');

previousClick = click;
click = this;

//below part checks if it is a match or no match
if (previousClick && (click.classList[2] == previousClick.classList[2]) && click.id !== previousClick.id && (previousClick.classList.contains('match') === false)) {
moves++
  document.getElementsByClassName('moves')[0].textContent = `${moves}`;
  if (moves > 19 && moves < 21){
    stars.innerHTML = `<li><i class="fa fa-star"></i></li>`;
    //stars.removeChild(stars.childNodes[3]);
  } else if (moves > 14 && moves <16){
    stars.innerHTML = `<li><i class="fa fa-star"></i></li>
    <li><i class="fa fa-star"></i></li>`;
    //stars.removeChild(stars.childNodes[5]);
  }
 if (click.childNodes[1].classList[1] == previousClick.childNodes[1].classList[1]){
   click.classList.add('match');
   previousClick.classList.add('match');
   document.getElementsByClassName('moves')[0].textContent = `${moves}`;
 } else {
   document.getElementsByClassName('moves')[0].textContent = `${moves}`;
   isIncorrect = true;
   click.classList.add('nomatch');
   previousClick.classList.add('nomatch');
   setTimeout (function(){
     click.classList.remove('open');
     previousClick.classList.remove('open');
     click.classList.remove('show');
     previousClick.classList.remove('show');
     click.classList.remove('nomatch');
     previousClick.classList.remove('nomatch');
     isIncorrect = false;
   }, 1000)

   }
  }
 }
}

});

setInterval(function(){
  timer++ },
 1000);

let restart = document.getElementsByClassName('restart')[0];
restart.addEventListener('click', function (){
  eachCard.forEach(function (item){
    item.classList.remove('match');
    item.classList.remove('open');
    item.classList.remove('show');
  })
  shuffle(array);
  showStuff();
  timer = 0;
  moves = 0;
  // let tempStar = firstStar.cloneNode(true);
  // stars.appendChild(tempStar);
  stars.innerHTML = `<li><i class="fa fa-star"></i></li>
  <li><i class="fa fa-star"></i></li>
  <li><i class="fa fa-star"></i></li>`
  document.getElementsByClassName('moves')[0].textContent = `${moves}`;
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
