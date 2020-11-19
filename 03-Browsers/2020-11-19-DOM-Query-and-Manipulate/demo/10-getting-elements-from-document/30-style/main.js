
setTimeout(biggerHeader, 1000);
setTimeout(biggerHeader, 2000);
setTimeout(biggerHeader, 3000);

setTimeout(makeRed, 4000);

console.log("setTimeout is non blocking");

function changeStyle() {
    let element = document.getElementById("head");

    element.style.fontSize *= 2;
    console.log(element.style.fontSize);
    console.log("changeStyle() executed");
}

function biggerHeader() {
    let tagname = 'th';
    let factor = 1.8;

    // retrieve a list (HTMLCollection) of elements by the given tagname ('th')
    let elements = document.getElementsByTagName(tagname);

    // observe the console.log, it actually holds
    console.log(elements);

    // iterate over the elements of the list
    for (let i = 0; i < elements.length; i++) {
        // get the current element of interest
        let elem = elements[i];

        // logging its font style (observe: it is empty)
        console.log(i, elem.style.fontSize);

        // the browser had rendered the element,
        // therefore it has computed a style,
        // that is used in the following:
        let style = window.getComputedStyle(elem, null);
        let effectiveFontSize = style.getPropertyValue('font-size');
        console.log("effective font size:", effectiveFontSize);
        console.log("effective font size via style.fontSize:", style.fontSize);

        // let's get rid of the trailing unit 'px';
        let effectiveSize = parseFloat(effectiveFontSize);
        console.log("effective font-size:", effectiveSize);

        // assign a new size (scaled by the factor - from the top of this function)
        // and append "px" to it.
        elem.style.fontSize = (factor * effectiveSize) + "px";
        /* */

        // also assigning directly a value without
        // getting the effective / computed value
        // first could be an option:
        // elem.style.fontSize = "32px"; //(factor * effectiveSize) + "px";
        console.log(i, elem.style.fontSize);
    }
}

// this function will make red the color for the "body"
// and therefore for the whole content.
function makeRed() {
    document.body.style.color = "red";
}
