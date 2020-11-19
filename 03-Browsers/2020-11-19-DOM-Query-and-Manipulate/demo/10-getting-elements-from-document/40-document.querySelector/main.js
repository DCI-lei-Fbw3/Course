
setTimeout(byTagName, 1000);

setTimeout(byClass, 2000);
setTimeout(byId, 3000);

setTimeout(byAttributeValue, 4000);

setTimeout(allByAttributeValue, 6000);

/*
    document.querySelector(SELECTOR)
        returns the first matching element
        as defined by the provided SELECTOR.
*/




function byTagName() {
    // retrieve the first 'p' element
    let element = document.querySelector('p');
    // set its textContent
    element.textContent = "This paragraphs textContent is set via javascript.";
}

function byClass() {
    // select via a class (observe the leading "."),
    // and set its style's color to "grey"
    document.querySelector(".last").style.color = "grey";
}

function byId() {
    // selecting via id (prefix "#") is also possible,
    // then here the font-weight is set to "bold".
    document.querySelector("#id_2").style.fontWeight = "bold";

    // an alternative to select an element via its ID
    // would be to use document.getElementById(ID) - somewhat clearer.
    // here the fontStyle is set to "italic"
    document.getElementById("id_2").style.fontStyle = "italic";
}

function byAttributeValue() {
    // here selecting via an attribute and matched value is demonstrated
    // matching elements need to have an "href" attribute
    // whose value must start with "mailto"
    let el = document.querySelector("[href^=mailto]");

    // subsequently the style is changed regarding "color" and "fontstyle"
    el.style.color = "darkred";
    el.style.fontStyle = "italic";
}

function allByAttributeValue() {
    // HERE THE METHOD document.querySelectorAll() is used,
    // it RETURNS a list of matching elements
    // here the list contains _every_ element having a href-attribute
    // with the value starting with "mailto"
    let elements = document.querySelectorAll("[href^=mailto]");

    // forEach is used to iterate over each element of the retrievel list of elements
    // forEach expects a callbackfunction with two parameters (element, index)
    elements.forEach((el, i) => { // here the callback function is defined in arrow notation
        // the style for each element "el" is changed
        el.style.color = "darkred";
        el.style.fontStyle = "italic";
        el.style.fontWeight = "bold";
        el.style.fontSize = "smaller";
    });
}
