// # Debugging Exercises

// #### 2. Month Name
// Create a function called `getMonthName`, which takes the number of the month as an argument (Jan = 1 - Dec = 12). Throw an error if a user inputs an invalid number as an argument.
// * Example
// * getMonthName(15) -> `Invalid Month Number!`

const getMonthName = (nber)=>{
    let month = ['Janvier','Fevrier','Mars','Avril','Mai','Juin','Juillet', 'Aout','Septembre','Octobre','Novembre','Decembre'];
    if(nber > 12 || nber < 0) {
        return 'Invalid Month Number'
    }
    else{
      for(let i = 0; i <= month.length; i++){
          if(nber === i+1 ) return month[i];
      }
    }
}
console.log(getMonthName(1))
