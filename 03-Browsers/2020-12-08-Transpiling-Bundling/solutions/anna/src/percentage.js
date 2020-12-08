function modulo(first, second) {
  return first % second;
}

function percentage(first, second) {
  return (first * second) / 100;
}

function percentageOf(first, second) {
  return (first * 100) / second;
}

function difference(first, second) {
  let calc = second - first;
  return (calc * 100) / first;
}

//helper function for math operations
function doMathOp(id1, id2, resultId, operation) {
  const value1 = $(`#${id1}`)[0].value;
  const value2 = $(`#${id2}`)[0].value;
  let result;
  switch (operation) {
    case "modulo":
      result = modulo(value1, value2);
      break;
    case "percentage":
      result = percentage(value1, value2);
      break;
    case "percentageOf":
      result = percentageOf(value1, value2);
      break;
    case "difference":
      result = difference(value1, value2);
      break;
  }
  $(`#${resultId}`)[0].value = result;
}

export default doMathOp;
