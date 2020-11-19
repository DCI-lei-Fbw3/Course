
setTimeout(one, 1000);
setTimeout(two, 3000);

function one() {
    document.getElementsByTagName("body")[0].innerHTML = '<h1>Hello World</h1>';
}

function two() {
    document.getElementsByTagName("body")[0].innerHTML = '<h1>Salut</h1>';
}
