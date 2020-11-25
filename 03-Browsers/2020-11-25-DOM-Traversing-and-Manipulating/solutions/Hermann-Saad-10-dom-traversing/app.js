let lastChild = document.querySelector("cite");
for (
  var e = document.querySelector("cite"), p = [];
  e && e !== document;
  e = e.parentNode
)
  p.push(e.localName);

let str = "";
for (let i = p.length - 1; i >= 0; i--) {
  if (i > 0) {
    str += " " + p[i] + " >";
  } else {
    str += " " + p[i];
  }
}
console.log(str);

for (
  var j = document.querySelector("cite"), arr_1 = [];
  j && j !== document;
  j = j.parentNode
)
  if (j.classList.length == 0) {
    arr_1.push(j.localName);
  } else if (j.classList.length > 0) {
    arr_1.push(j.localName + "." + j.classList);
  }

let str2 = "";
for (let i = arr_1.length - 1; i >= 0; i--) {
  if (i > 0) {
    str2 += " " + arr_1[i] + " >";
  } else {
    str2 += " " + arr_1[i];
  }
}
console.log(str2);
