// 1
let fruit, vegetable, food;
[fruit, vegetable, ...food] = ["banana", "cucumber", "bread", "cakes", "pizza"];
console.log(fruit, vegetable, food);

// 2
let fran, martina, camille;
({ fran, martina, camille } = {
  fran: "monster",
  martina: "ghost",
  camille: "witch"
});
console.log(fran, martina, camille);

// 3
const musician = {
  firstName: "Regina",
  lastName: "Spektor",
  nationality: "American-Russian",
  greatestHit: "Us",
  genre: "indie-pop",
  role: "singer/songwriter and pianist"
};

const displayMusicianDetails = ({
  firstName,
  lastName,
  nationality,
  greatestHit,
  genre,
  role
}) => {
    return `${firstName} ${lastName} is a ${nationality} ${role}. The musician sings ${genre} and their greatest hit is "${greatestHit}". ${firstName} ${lastName} is also the greatest.`;
};

console.log(displayMusicianDetails(musician));

//4
let user = {
    name: "John",
    years: 30
  };
  
  let {name, years: age, isAdmin = false} = user;
  
  alert( name ); // John
  alert( age ); // 30
  alert( isAdmin ); // false

  //5
  function topSalary(salaries) {

    let max = 0;
    let maxName = null;
  
    for(const [name, salary] of Object.entries(salaries)) {
      if (max < salary) {
        max = salary;
        maxName = name;
      }
    }
  
    return maxName;
  }