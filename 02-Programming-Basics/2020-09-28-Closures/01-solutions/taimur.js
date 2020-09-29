// 1
function add(a) {
    return function sum(b) {
      return a + b;
    };
  }
  
  console.log(add(2)(3));
  
  // 2
  function multiplier(factor) {
    return number => number * factor;
  }
  
  const timesTwo = multiplier(2);
  console.log(timesTwo(6));
  
  // 3
  (function(currentAge, retirementAge, monthlyWage, percentageSaved) {
    const yearsToSave = retirementAge - currentAge;
    const monthsToSave = yearsToSave * 12;
    const amountSavedPerMonth = (monthlyWage * percentageSaved) / 100;
    const totalSaved = amountSavedPerMonth * monthsToSave;
    console.log(`€${totalSaved}`);
  })(40, 65, 2000, 5);