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

Up to know it is quite static, to get a more dynamic solution let's create a class `Game`. which has two attributes `width` and `height` and a method `board`.

The `board` method should create an `Element` to represent a board with `width` and `height` as defined by the game's attributes.

Now instead of adding static code to the div-container:

1. create a game with the dimensions (3,3)
2. add the returned value of the `board()` method to the div-container.
3. delete the content of the div-container before adding the board.
4. test with other dimensions

## Manipulating the Board

Let's play a non-interactive game. The idea would be to mark fields with an "X" or "O". So some functionality to manipulate a specific field with a specific "Character" is needed.

Therefore:

-   let's move the current content of the fields (the numbers referring to row and column) and use that as the `id` of the corresponding table-cell.
-   create a method `mark(x, y, string)` with three parameters `x`, `y`, and `string`

    that method should select the field by its `id`, the target `id` is built by combining the provided parameters `x` and `y`.

-   in order to avoid id duplications in boards bigger than 9x9 fields introduce a separator between the numbers making up the id. Let the separator be the underscore "\_".

    -   implement a method `generateID(x, y)` which returns the anticipated ID, i. e. `generateID(1, 2) // => `"1_2"`).

-   finally setup a non-interactive game:

```javascript
// pseudo-code:
let g = new Game(3, 3);
g.mark(2, 2, "X");
g.mark(1, 1, "O");
//...
```

## Styling Revisited

-   possibly now is the time for a little work on the css. If you removed the fields' text-content, then maybe the sizes change if later a field is marked. Compensate for that.
-   since we work in the context of the styling, also make the headline and the board being displayed centered horizontally.

## New Concept "Pieces"

Introduce a place to select a type of playing Piece from. That could be another table displaying the different available types of pieces.
Create it in a way that allows to change the number of available types of pieces (e. g. `types = ["a", "b", "c"`).

-   `index.html`: add another `div` with `id=pieces`
-   `style.css`:
    -   for that new div-element add a `margin-top` with `2em`
    -   create classes `.piece_X` and `.piece_O` and assign red and green background colors.
    -   change the way the text-content is added, from javascript to css, like:
-   be aware to make use of the freshly created classes inside of the pieces-container.

```css
/* style.css */
.piece_O:after {
	content: "O";
}
```

-   `game.js`:

    -   introduce new methods

        -   `copy(source, target)` and
        -   `move(source, target)`

        The parameters shall be of type Element.

        Both methods work on the css-classes of the provided arguments. `copy` shall copy the classes while `move` moves them from `source` to `target`.

        Usage:

        ```
        let X = document.getElementById("X");
        let O = document.getElementById("O");

        game.copy(X, document.getElementById("2_2"));
        game.copy(O, document.getElementById("1_1"));
        game.move(document.getElementById("1_1"), document.getElementById("1_3"));
        ```

## Interactivity

Finally the fun start :-)

We are about to add an `onClick` event-handler.

The goal is to allow the user to click first on a source and then on a target field. Then depending on the source the appropriate method should be executed with the two parameters (source, target) as specified by the click-sequence:

-   first click => source
-   second click => target

Speaking of a sequence of clicks, this leads to the need of some kind of history, so:

-   `index.html`: surround the two containers (board, pieces) with a div-container having the id "game" (`<div id="game">`).

    Later an event-handler will be added to that "game"-container. So that every click-event will be captured by that.

-   `game.js`:

    -   Add an attribute "`history`" to our Game class and initialize it with an empty array.

    -   Add an experimental method `onclickHandler` to the `Game` class.

        Let it log the id of the event's target to the console.

    -   Attach that `onclickHandler` to the event-listener "onclick" of the "game"-container.

    -   Try to push that id to the history of the game (something like: `this.history.push(id);`). Accessing `this` is not directly possible by the method, the key to the solution is applying a closure. Rough outline of a solution:

        ```javascript
        makeOnclickHandler(){
        	return (event) => {
        		this.event.push(ID_GOES_HERE);
        	}
        }
        ```

    -   use `makeOnclickHandler()` to add the event-handler to the onclick-listener of the game-container.

        Note: Take care of the way how the event-handler is added.

    -   if the above works continue with implementing the actual copy/move functionality.

        Hints:

        -   On every event push the respective event-target's ID to the history.

        -   On every second event a "click-sequence" is complete, so that it can be executed. In order to decide whether to execute a "move" or a "copy" the first of that two-click-sequence must be evaluated, if the source belongs to "pieces" it will be a "copy" if it belongs to the "board" it will be a "move".

        -   if such a two-click-sequence is complete and the event's target has been added to the history, then the second to last element of the history will always be the "source" and the last element will be the "target".
