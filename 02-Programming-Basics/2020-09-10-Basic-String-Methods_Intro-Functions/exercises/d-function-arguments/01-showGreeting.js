/* 
    create a function named showGreeting
    show greeting has one optional argument "name"
    it should log "Hello " + name to the console if a name is given, 
    else "Hello World".

    present the functionality of that function, with and without an argument
*/ 
function showGreeting (name) {
    /*if (name==null){
        console.log ("Hello World");
    } else {
        console.log ("Hello", name);
    }*/
    (name==null)? console.log("Hello World"): console.log("Hello", name); 
}

showGreeting();
showGreeting("Pooh");
showGreeting("Tigger");
showGreeting("Christopher Robin");
