// Variables 
const body = document.getElementsByTagName('body')[0];
const h1 = document.getElementsByTagName('h1')[0];
const labels = document.getElementsByClassName('category');
const uls = document.querySelectorAll('ul.food-category');
const main = document.getElementsByTagName('main')[0];
const allergyWarning = document.getElementsByClassName('allergy-warning')[0];
const warning = document.getElementById('warning');
const allergies = document.getElementsByClassName('allergies')[0];
const allEvenAllergyInfoElements = document.querySelectorAll('ul.allergies li:nth-child(even)');
const footer = document.getElementsByClassName('footer')[0];
const footerElements = document.getElementsByClassName('food-desc');

// state tracking || window.matchMedia is better
let mobileSettingsApplied = false;
let desktopSettingsApplied = false;

// Functions

//Create a function named "colorGenerator" that returns a different color. The returned random color should also include set transparency. 
const colorGenerator = () =>
    `rgba(
        ${Math.floor(Math.random() * 256)}, 
        ${Math.floor(Math.random() * 256)}, 
        ${Math.floor(Math.random() * 256)}, 
        1)`;


// Align the food-category lists in a row on desktop. Make sure that the page is responsive and also works on mobile.
//The descriptions in the footer should appear in a column for mobile and in a row for desktop.
const updateUls = () => {

    // mobile settings
    if (window.innerWidth < 768 && !mobileSettingsApplied) {

        //responsive menu items
        uls.forEach(ul => {
            ul.style.flex = '1 1 100%';
            ul.style.margin = '10px 20px';
        });

        //responsive footer & footer-items
        footer.style.flexDirection = "column";
        [...footerElements].forEach(e => {
            e.style.margin = '10px 0';
        })

        // track state
        desktopSettingsApplied = false;
        mobileSettingsApplied = true;

        //console.log('mobile fired');

    // desktop settings
    }   else if (window.innerWidth >= 768 && !desktopSettingsApplied) {

        uls.forEach(ul => {
            ul.style.flex = '1 1 100px';
            ul.style.margin = '0 20px';
        });

        footer.style.flexDirection = 'row';
        [...footerElements].forEach(e => {
            e.style.margin = '0 20px';
        })

        desktopSettingsApplied = true;
        mobileSettingsApplied = false;

        //console.log('desktop fired');
    }
}


const init = () => {

    // Change the font of the body element.
    body.style.fontFamily = 'sans-serif';

    // Center the text of h1 on the page.   
    h1.style.textAlign = 'center';

    // The menu headings have a class named category. Select the elements by class name. Then, change the color and font-style of each element.   
    for (label of labels) {
        label.style = 'color: white; font-style: italic; display: inline-block; padding: 0 0 5px;'
    }

    main.style = 'display: flex; justify-content: space-around; flex-flow: row wrap';

    // Select the unordered lists with the class of food-category. Give each list a different background color using the function that you created.   
    uls.forEach(ul => {
        ul.style.background = colorGenerator();
        ul.style.padding = '10px 30px';
    });

    // Make the allergy-warning appear as a column in the center of the page.
    allergyWarning.style = "display: flex; flex-flow: column; align-items: center; margin: 50px";

    // Select the warning at the end of the page by its id warning. Select the id without using a querySelector. Change the size and font of the warning.
    warning.style = "font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; font-size: 1.5rem; margin-bottom: 0";
    
    allergies.style = "width: 200px";

    // Select all even allergy-info items. Give the even items a different background color.
    allEvenAllergyInfoElements.forEach(e => e.style.background = 'steelblue');
    
    footer.style = "display: flex; justify-content: center; align-items: center";
    
    // use spread operator to access forEach for HTMLCollections, otherwise for of
    // The descriptions in the footer should also be styled, e.g. a rounded border with a background color.
    [...footerElements].forEach(e => {
        e.style.width = '100px';
        e.style.height = '100px';
        e.style.border = '5px solid orange';
        e.style.borderRadius = '50%';
        e.style.display = 'flex';
        e.style.justifyContent = 'center';
        e.style.alignItems = 'center';
    })
    
    updateUls();

}

//callstack
init();
window.onresize = updateUls;







