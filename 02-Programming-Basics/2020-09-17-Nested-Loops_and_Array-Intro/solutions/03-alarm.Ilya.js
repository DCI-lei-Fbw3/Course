const stringMultiplier = (string, multiplier) => {
  let result = "";
  for (let i = 0; i < multiplier; i++) {
    result += string;
  }
  return result;
};

const randNumGen = (quant, threshold) => {
  for (let i = 0; i < quant; i++) {
    let randomNumber = Math.random();

    if (randomNumber >= threshold) {
      let stars = stringMultiplier(
        "*",
        Math.floor((randomNumber - threshold) / 0.1)
      );
      //console.log(stars);
      console.log(
        `${stars}Attention: current value (${randomNumber}) exceeds the threshold ${threshold} by ${
          randomNumber - threshold
        }.`
      );
    } else {
      console.log(
        `Current value (${randomNumber}) is below the treshold (${threshold}) by ${
          threshold - randomNumber
        }.`
      );
    }
  }
};

randNumGen(5, 0.4);
