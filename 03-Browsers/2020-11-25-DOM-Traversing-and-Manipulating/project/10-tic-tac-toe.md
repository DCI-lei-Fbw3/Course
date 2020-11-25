# Tic Tac Toe

Start creating a tic, tac, toe game in the browser.

## Initial Mockup

Create a visualization of the board. Therefore create an HTML-file `index.html` with a table consisting of three rows and three columns. Put numbers into the table cells, so that their positions are reflected, e. g.:

| 11 | 12 | 13 |

| 21 | 22 | 23 |

| 31 | 32 | 33 |

Introduce an external stylesheet (`style.css`).
Style the table so that borders are displayed, and that there is a each cell has a padding of `1em` for every padding but padding-bottom, which should be set to `1.1em`.

## Move Mockup to Javascript

Let's head into the javascript direction.

-   create a Javascript file `game.js` and include it in the previously created mockup `index.html`.

-   `index.html`: add a container `<div id="board"></div>`.

-   `game.js`: get that container-element and add the previously mocked-up board as its content.

## Make the Code more Dynamic

Up to know it is quite static, to get a more dynamic solution let's create a class `game`. which has two attributes `width` and `height` and a method `board`.

The `board` method should create an `Element` to represent a board with `width` and `height` as defined by the game's attributes.

Now instead of adding static code to the div-container:

1. create a game with the dimensions (3,3)
2. add the returned value of the `board()` method to the div-container.
3. delete the content of the div-container before adding the board.
4. test with other dimensions

## Manipulating the Board

Let's play a non-interactive game.

-   we need functions, that move around
