/* const difference = (a, b) => {
  let result = a - b;
  if (result < 0) return result * -1;
  else return result;
}; */
const difference = (a, b) => {
  return Math.abs(a - b);
};

module.exports = difference;
