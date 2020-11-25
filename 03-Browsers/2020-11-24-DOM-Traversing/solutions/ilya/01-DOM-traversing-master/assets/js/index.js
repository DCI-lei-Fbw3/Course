document.getElementsByTagName('h1')[0].closest('header').style.border = '5px solid grey';

if (document.querySelector('section.info .info-package')) {
    [...document.getElementsByClassName('package-title')].forEach(title =>
        title.previousElementSibling.style.border = '2px solid midnightblue')
}

[...document.getElementsByTagName('label')].forEach(label => {

    switch (label.className) {
        case 'mild':
            label.style.borderBottom = '2px solid yellow';
            break;
        case 'intense':
            label.style.borderBottom = '2px solid orange';
            break;
        default:
            label.style.borderBottom = '2px solid red';
            break;
    }

});

[...document.getElementsByClassName('nav-list')[0].children].forEach(li => 
    document.getElementsByClassName('site-map')[0].appendChild(li.cloneNode(true)));

// alternative:
/* 
let navList = document.querySelector(".nav-list");
let footerList = document.querySelector(".site-map");

footerList.innerHTML = navList.innerHTML; 
*/
