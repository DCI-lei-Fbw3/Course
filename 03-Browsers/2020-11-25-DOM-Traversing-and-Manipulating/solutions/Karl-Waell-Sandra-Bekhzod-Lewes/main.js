let cite = document.querySelector('cite'); 

let citesClosest =  [cite.closest(".quote").tagName, cite.closest("section").tagName, cite.closest(".page").tagName, cite.closest("body").tagName, cite.closest("html").tagName]
console.log(citesClosest.reverse().join(" > "));



