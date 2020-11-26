//Using recursion

function collectAllParents(element, arr) {
  if (!element.parentElement) {
    return arr;
  }
  let parent = element.parentElement;
  let tagAndClass =
    parent.tagName +
    (parent.classList.length > 0 ? "." + parent.classList : "");
  arr.push(tagAndClass);
  return collectAllParents(element.parentElement, arr);
}

function formatParentList(arr, firstElement) {
  let reversedArr = arr.reverse();
  let stringOfParents = reversedArr.join(" > ");
  stringOfParents += " > " + firstElement.tagName;
  return stringOfParents.toLowerCase();
}

let cite = document.getElementsByTagName("cite")[0];

const citeParents = collectAllParents(cite, []);
console.log(formatParentList(citeParents, cite));
