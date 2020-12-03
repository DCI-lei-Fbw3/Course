# Propagation, Delegation

## Event bubbling concept:

"Events bubble from innermost to outermost elements"

-   ### Common problems with bubbling:

    `Event.stopPropagation()` as solution

-   ### Different targets:

    `Event.target` vs. `Event.currentTarget`

-   ### Event listener issues:

    Performance impact, adding events to dynamic lists

-   ### Event delegation solution:

    Delegating events from parent to child

-   ### Reversing propagation:

    The `useCapture` option in `addEventListener()`,
    `DOMContentLoaded` use case

## Links

https://javascript.info/bubbling-and-capturing

https://www.w3schools.com/js/js_htmldom_eventlistener.asp
