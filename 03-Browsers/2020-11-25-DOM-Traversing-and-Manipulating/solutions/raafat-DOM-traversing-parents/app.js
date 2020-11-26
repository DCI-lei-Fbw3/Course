let cite = document.querySelector("cite");
let citeParent = cite.parentElement;
let citeGrand1st = cite.closest(".quote");
let citeGrand2nd = cite.closest("section");
let citeGrand3rd = cite.closest(".page");
let citeGrand4th = cite.closest("body");
let citeGrand5th = cite.closest("html");
console.log(
	`${citeGrand5th.tagName} > ${citeGrand4th.tagName} > ${citeGrand3rd.tagName}.${citeGrand3rd.className} > ${citeGrand2nd.tagName} > ${citeGrand1st.tagName}.${citeGrand1st.className} > ${citeParent.tagName}.${citeParent.className} > ${cite.tagName}`
);
