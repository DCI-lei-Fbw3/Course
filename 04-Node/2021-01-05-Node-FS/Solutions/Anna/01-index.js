const process = require("process");

const args = process.argv.slice(2);
const [funcName, ...entries] = args;
const entriesAsNums = entries.map((num) => parseInt(num));
const nanValues = revealNonNums(entries);

function sum(nums) {
  let totalSum = nums.reduce((acc, curr) => acc + curr, 0);
  return totalSum;
}

function avg(nums) {
  let finalAverage = sum(nums) / nums.length;
  return finalAverage;
}

function revealNonNums(entries) {
  let nonNums = [];
  entries.forEach((element) => {
    const elementAsInteger = parseInt(element);
    if (isNaN(elementAsInteger)) {
      nonNums.push(element);
    }
  });
  return nonNums;
}

if (nanValues.length >= 1) {
  console.log(`Sorry, the following arguments are not numbers: ${nanValues}.`);
} else if (funcName === "sum") {
  console.log(sum(entriesAsNums));
} else if (funcName === "avg") {
  console.log(avg(entriesAsNums));
} else {
  console.log(
    "I cannot calculate that, please type either 'sum' (to calculate the sum) or 'avg' (To calculate the Average)"
  );
}
