function person({name: x, job: y} = {}) {
    console.log(x);
}

person({name: "Michelle"});//"Michelle"
person();//undefined

//person(friend);//Error : friend is not defined


console.log("\nassigning default values");
function person({name: x = "Sarah", job: y = "Developer"} = {}) {
    console.log(x);
}

person({ name: "Tom" }); // "Tom"
person({}); // defaults to "Sarah"
person(); // defaults to "Sarah"

//person({name}); // ReferenceError: name is not defined
