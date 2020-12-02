const showDestinations = document.getElementsByTagName('button')[0];
const list = document.getElementsByTagName('ul')[0]; 
const destinations = document.getElementsByTagName('li');
const selection = document.getElementsByClassName('alert-success')[0];

/* add click event listener to the showDestinations-button */
showDestinations.addEventListener('click', () => {
    /* show/hide destination list */
    list.classList.toggle('d-none');
    /* amend showDestinations-button's textContent depending on whether the destination-list is visible or not*/
    showDestinations.textContent = list.classList.contains('d-none') ? 'Show destinations' : 'Hide destinations';
});

/* add click event listeners to all destinations */
[...destinations].forEach(destination => destination.addEventListener('click', (e) => {
        /* show the selection-alert */
        selection.classList.remove('d-none');
        /* amend selection-alert's textContent */
        selection.textContent = `You selected ${e.target.textContent}`;
        /* remove the 'active' class from all destinations and add it to the one that got clicked on */
        [...destinations].forEach(destination => destination.classList.remove('active'));
        destination.classList.add('active');
    })
)

