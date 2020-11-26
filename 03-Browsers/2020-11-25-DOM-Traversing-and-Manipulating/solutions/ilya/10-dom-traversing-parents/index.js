const cite = document.querySelector('cite');

// while loop
/*  
function printAllParentWithClasses(child){

    let s = '';
    element = child;

    while(element !== null){
        clAppendix = element.classList.length ? '.' + element.classList : '';
        s += element.nodeName.toLowerCase() + clAppendix + ' ';
        element = element.parentElement;
    }

    s = s.trim().split(' ').reverse().join(' > ');

    return s;
}   
*/

// recursive
function printAllParentWithClasses(child) {
    clAppendix = child.classList.length ? '.' + child.classList : '';
    if (child.parentElement === null) return child.nodeName.toLowerCase() + clAppendix;
    let s = child.nodeName.toLowerCase() + clAppendix + '|' + printAllParentWithClasses(child.parentElement);
    s = s.split('|').reverse().join(' > ');
    return s;
}

// one liner with a small issue
// const printAllParentWithClasses = child => child.parentElement === null ? `${child.nodeName.toLowerCase()}.${child.classList}` : `${child.nodeName.toLowerCase()}.${child.classList} ${printAllParentWithClasses(child.parentElement)}`;


console.log(printAllParentWithClasses(cite));