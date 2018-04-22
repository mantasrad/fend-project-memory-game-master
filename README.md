# Memory Game Project

## Table of Contents

* [Instructions](#instructions)
* [Contributing](#contributing)

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Memory Game project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the [Udacity Classroom](https://classroom.udacity.com/me).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).


##Playing the game

This is a memory game which is played by flipping cards and trying to find a match. To win all 16 cards must be matched. 
In case there is an incorrect guess the cards shake and are turned back.
There are some stats available in the game:
1) Star rating - user starts with 3 stars and 1 is removed after move 15 and the other is removed after move 20. 
2) Timer - it simply calculates the time in minutes and seconds.
3) Number of moves - defines 2 card flip as a move. The less moves - the better.

##Built With

All code is written in HTML, CSS and JavaScript.
https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css - library for icons
https://fonts.googleapis.com/css?family=Coda - used to style icons.
https://fonts.googleapis.com/css?family=Merriweather+Sans - used to style the congratulations menu.

##Code logic:

Most parts are explained in the comments, but here is a brief explanation:
Deck is cleared and array of cards is shuffled with the the shuffle() function tanken from: http://stackoverflow.com/a/2450976
After that clicks are added to cards. After clicks are added the information about current click and previous click are stored into variables click and previousCLick.
After that the code checks what is a match and what is not a match and prevents some unwanted behaviours of the game (like to be able to click 3 cards in a row).
Finally, then there is the logic for the end menu - but it is quite understandable.

#Author
Mantas Radzvilavicius 