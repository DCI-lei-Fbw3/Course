document.getElementsByTagName('h1')[0].closest('header').style.border = '5px solid grey';

if (document.querySelector('section.info .info-package') !== null) {
    [...document.getElementsByClassName('package-title')].forEach(title =>
        title.previousElementSibling.style.border = '2px solid midnightblue')
}

[...document.getElementsByTagName('label')].forEach(label => {

    switch (label.textContent.toLowerCase()) {
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
