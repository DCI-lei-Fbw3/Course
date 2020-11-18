
setTimeout(biggerHeader, 1000);
setTimeout(biggerHeader, 2000);
setTimeout(biggerHeader, 3000);

setTimeout(makeRed, 4000);

console.log("setTimeout is non blocking");

function changeStyle() {
    let element = document.getElementById("head");

    document.getElem

    element.style.fontSize *= 2;
    console.log(element.style.fontSize);
    console.log("changeStyle() executed");
}

function biggerHeader() {
    let tagname = 'th';
    let factor = 1.2;

    elements = document.getElementsByTagName(tagname);

    for (let i = 0; i < elements.length; i++) {
        let elem = elements[i];

        let effectiveFontSize = window.getComputedStyle(elem, null).getPropertyValue('font-size');
        let effectiveSize = parseFloat(effectiveFontSize);
        console.log("effective font-size:", effectiveSize);
        elem.style.fontSize = (factor * effectiveSize) + "px";
    }
}

function makeRed() {
    document.body.style.color = "red";
}
