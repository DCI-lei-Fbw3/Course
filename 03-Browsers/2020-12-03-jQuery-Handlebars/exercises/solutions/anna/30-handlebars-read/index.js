// Get the template by its id
var source = document.getElementById("card-template").innerHTML;
// Compile it
var templateFunction = Handlebars.compile(source); // returns a function
// Pass data to the template function: it must match what you use in the template defined in the HTML
var html = templateFunction({
    firstName: 'Jane',
    lastName: 'Doe',
    jobTitle: 'Front End Developer',
    startDate: '24.09.2018',
    birthday: '31.08.1993',
    manager: {
        firstName: 'John',
        lastName: 'Downson'
    }
});
// Add to HTML document in the element with id output
document.querySelector('#output').innerHTML = html;
