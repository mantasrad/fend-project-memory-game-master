let timer = 0;
let card = document.getElementsByClassName('card');
let cardsArray = Array.from(card);
let moves;
moves = 0;
document.getElementsByClassName('moves')[0].textContent = `${moves}`;
let deck = document.querySelector('.deck');
let stars = document.getElementById('stars');
let matches = 0;
let restartButton = document.getElementById('yes');
let noRestartButton = document.getElementById('no');

let minutes;
let seconds;
let time = document.getElementById('time');

restartButton.addEventListener('click', function() {
    startNew();
});

//necessary fuctions for the game to be restarted
function clearDeck() {
    deck.innerHTML = "";
}

function showStuff() {
    for (let i = 0; i < cardsArray.length; i++) {
        let temp = cardsArray[i];
        deck.appendChild(temp);
    }
}

let eachCard = document.querySelectorAll('.card');

eachCard.forEach(function coverCards(item) {
    item.classList.toggle('match', false);
    item.classList.toggle('open', false);
    item.classList.toggle('show', false);
});


// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(cardsArray) {
    var currentIndex = cardsArray.length,
        temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = cardsArray[currentIndex];
        cardsArray[currentIndex] = cardsArray[randomIndex];
        cardsArray[randomIndex] = temporaryValue;
    }

    return cardsArray;


}

//on page refresh to initialize the game
clearDeck();

shuffle(cardsArray);

showStuff();


let icon = document.querySelectorAll('.icon');
let click;
let previousClick;

let isIncorrect;

function clickTAG(i) {
    let cardElement = i.parentNode;
    cardElement.addEventListener("click", addClicks);

    //main function to define when a card can be clicked and what happens after clicking
    function addClicks() {
        //if prevents 3rd card to be clicked
        if (!isIncorrect && this.classList.contains('match') === false) {

            cardElement.classList.add('open');
            cardElement.classList.add('show');

            previousClick = click;
            click = this;

            //below part checks if it is a match or no match with some prerequisites to be met
            if (previousClick && (click.classList[2] == previousClick.classList[2]) && click.id !== previousClick.id && (previousClick.classList.contains('match') === false)) {
                moves++;
                document.getElementsByClassName('moves')[0].textContent = `${moves}`;
                if (moves > 19 && moves < 21) {
                    stars.innerHTML = `<li><i class="fa fa-star"></i></li>`;
                } else if (moves > 14 && moves < 16) {
                    stars.innerHTML = `<li><i class="fa fa-star"></i></li>
    <li><i class="fa fa-star"></i></li>`;

                }
                if (click.childNodes[1].classList[1] == previousClick.childNodes[1].classList[1]) {
                    click.classList.add('match');
                    previousClick.classList.add('match');
                    document.getElementsByClassName('moves')[0].textContent = `${moves}`;
                    matches += 2;
                    //winning the game
                    if (matches === 16) {
                        printStats();
                    }
                } else {
                    document.getElementsByClassName('moves')[0].textContent = `${moves}`;
                    isIncorrect = true;
                    click.classList.add('nomatch');
                    previousClick.classList.add('nomatch');
                    setTimeout(function() {
                        click.classList.remove('open');
                        previousClick.classList.remove('open');
                        click.classList.remove('show');
                        previousClick.classList.remove('show');
                        click.classList.remove('nomatch');
                        previousClick.classList.remove('nomatch');
                        isIncorrect = false;
                    }, 1000);

                }
            }
        }
    }

}

icon.forEach(clickTAG);

//timer
setInterval(function() {
        timer++;
        minutes = Math.floor(timer / 60);
        seconds = timer - minutes * 60;
        time.innerHTML = `${minutes} min and ${seconds} sec`;
    },1000);

let stats = document.getElementsByClassName('stats')[0].childNodes[1];
let statsBox = document.getElementsByClassName('congratulations')[0];

let restart = document.getElementsByClassName('restart')[0];
restart.addEventListener('click', function() {
    startNew();
});

//logic of what happens when restart button is pressed
function startNew() {
    eachCard.forEach(function(item) {
        item.classList.remove('match');
        item.classList.remove('open');
        item.classList.remove('show');
    });
    shuffle(cardsArray);
    showStuff();
    timer = 0;
    moves = 0;
    stars.innerHTML = `<li><i class="fa fa-star"></i></li>
  <li><i class="fa fa-star"></i></li>
  <li><i class="fa fa-star"></i></li>`;
    statsBox.classList.add('hidden');
    document.getElementsByClassName('moves')[0].textContent = `${moves}`;
    matches = 0;
}

//congratulations menu content
function printStats() {
    statsBox.classList.remove('hidden');
    stats.textContent = `You have spent ${minutes} min and ${seconds} sec and made ${moves} moves!`;
    if (moves < 15) {
        stats.innerHTML += '<br>' + `<li><i class="fa fa-star"></i></li>
    <li><i class="fa fa-star"></i></li>
    <li><i class="fa fa-star"></i></li>`;
    } else if (moves >= 15 && moves < 20) {
        stats.innerHTML += '<br>' + `<li><i class="fa fa-star"></i></li>
    <li><i class="fa fa-star"></i></li>`;
    } else {
        stats.innerHTML += '<br>' + `<li><i class="fa fa-star"></i></li>`;
    }
}



noRestartButton.addEventListener('click', function() {
    statsBox.classList.add('hidden');
});
